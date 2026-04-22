"use client";

import { useEffect, useRef } from "react";

const SECTION_IDS = [
	"inicio",
	"sobre-mi",
	"experiencia",
	"tecnologias",
	"proyectos",
	"contacto",
] as const;

const SNAP_DURATION = 650;
const NAV_HEIGHT = 64;
/** px tolerance to consider the scroll position "at the section boundary" */
const BOUNDARY_TOL = 10;
/** ms with no wheel events → gesture is over; resets snapFiredInGesture */
const WHEEL_IDLE_MS = 200;
/**
 * ms to block new snaps right after one completes.
 * Short enough to feel responsive, long enough to absorb trackpad momentum tail.
 */
const POST_SNAP_COOLDOWN_MS = 300;

function easeInOutCubic(t: number) {
	return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function ScrollSnap() {
	const anim = useRef({
		active: false,
		fromY: 0,
		fromIndex: 0,
		toY: 0,
		toIndex: 0,
		startTime: 0,
		duration: SNAP_DURATION,
		direction: 1 as 1 | -1,
		rafId: null as number | null,
		completedAt: 0,
	});

	const inp = useRef({
		// ── Wheel / trackpad gesture ──
		wheelBusy: false,
		wheelIdleTimer: null as ReturnType<typeof setTimeout> | null,
		/** true once a snap has fired within the current continuous wheel gesture */
		snapFiredInGesture: false,

		// ── Boundary lock (wheel + keyboard) ──
		/** true after the first gesture reaches the section boundary */
		boundaryLocked: false,
		boundaryDir: 0 as 0 | 1 | -1,
		/** section index the lock belongs to; prevents stale locks in a new section */
		boundaryIdx: -1,

		// ── Touch (touchscreen) ──
		touchStartY: 0,
		touchConsumed: false,
		touchBoundaryLocked: false,
		touchBoundaryDir: 0 as 0 | 1 | -1,
		touchBoundaryIdx: -1,
	});

	useEffect(() => {
		const a = anim.current;
		const i = inp.current;

		// ── Helpers ──────────────────────────────────────────────────────

		function getSections(): HTMLElement[] {
			return SECTION_IDS.map((id) => document.getElementById(id)).filter(
				Boolean,
			) as HTMLElement[];
		}

		function availH(): number {
			return window.innerHeight - NAV_HEIGHT;
		}

		function secTopY(s: HTMLElement): number {
			return s.offsetTop - NAV_HEIGHT;
		}

		function fitsInView(s: HTMLElement): boolean {
			return s.offsetHeight <= availH() + 1;
		}

		function currentIndex(): number {
			const secs = getSections();
			let idx = 0;
			for (let k = 0; k < secs.length; k++) {
				if (window.scrollY >= secTopY(secs[k]) - 10) idx = k;
				else break;
			}
			return idx;
		}

		/** Max scrollY that keeps this section (+ footer for last) fully visible */
		function sectionBottomScrollY(sec: HTMLElement, isLast: boolean): number {
			if (isLast) {
				const footer = document.querySelector("footer");
				if (footer) {
					// Use footer's actual offsetTop so margins/gaps between section and footer are accounted for
					return Math.max(
						0,
						footer.offsetTop + footer.offsetHeight - window.innerHeight,
					);
				}
			}
			return Math.max(0, secTopY(sec) + sec.offsetHeight - availH());
		}

		/** Convert WheelEvent delta to pixels regardless of deltaMode */
		function deltaPx(e: WheelEvent): number {
			if (e.deltaMode === 0) return e.deltaY; // already pixels
			if (e.deltaMode === 1) return e.deltaY * 40; // lines → px estimate
			return e.deltaY * availH(); // pages
		}

		// ── Animation ────────────────────────────────────────────────────

		function runAnim() {
			function frame(now: number) {
				const elapsed = now - a.startTime;
				const t = Math.min(elapsed / a.duration, 1);
				window.scrollTo(0, a.fromY + (a.toY - a.fromY) * easeInOutCubic(t));
				if (t < 1) {
					a.rafId = requestAnimationFrame(frame);
				} else {
					window.scrollTo(0, a.toY);
					a.active = false;
					a.rafId = null;
					a.completedAt = performance.now();
				}
			}
			a.rafId = requestAnimationFrame(frame);
		}

		function snapTo(targetIdx: number) {
			const secs = getSections();
			if (targetIdx < 0 || targetIdx >= secs.length) return;

			const toY = secTopY(secs[targetIdx]);
			if (Math.abs(toY - window.scrollY) < 5) return;

			const dir: 1 | -1 = toY > window.scrollY ? 1 : -1;

			// Clear boundary locks on any new snap
			i.boundaryLocked = false;
			i.boundaryDir = 0;
			i.touchBoundaryLocked = false;
			i.touchBoundaryDir = 0;

			if (a.active) {
				if (dir === a.direction) return;
				// Direction reversal: snap back to origin with proportional duration
				if (a.rafId !== null) cancelAnimationFrame(a.rafId);
				const progress = Math.min(
					(performance.now() - a.startTime) / a.duration,
					1,
				);
				const savedFromIndex = a.fromIndex;
				a.fromY = window.scrollY;
				a.toY = secTopY(secs[savedFromIndex]);
				a.fromIndex = a.toIndex;
				a.toIndex = savedFromIndex;
				a.startTime = performance.now();
				a.duration = Math.max(SNAP_DURATION * progress, 80);
				a.direction = dir;
				runAnim();
				return;
			}

			a.active = true;
			a.fromY = window.scrollY;
			a.fromIndex = currentIndex();
			a.toY = toY;
			a.toIndex = targetIdx;
			a.startTime = performance.now();
			a.duration = SNAP_DURATION;
			a.direction = dir;
			runAnim();
		}

		// ── Wheel ─────────────────────────────────────────────────────────

		function onWheel(e: WheelEvent) {
			// Always take full control — no native scroll ever
			e.preventDefault();

			// During animation: allow direction reversal only
			if (a.active) {
				const dir: 1 | -1 = e.deltaY > 0 ? 1 : -1;
				if (dir !== a.direction) snapTo(a.fromIndex);
				return;
			}

			const dir: 1 | -1 = e.deltaY > 0 ? 1 : -1;
			const isNewGesture = !i.wheelBusy;

			// Track gesture lifecycle
			i.wheelBusy = true;
			if (i.wheelIdleTimer) clearTimeout(i.wheelIdleTimer);
			i.wheelIdleTimer = setTimeout(() => {
				i.wheelBusy = false;
				i.wheelIdleTimer = null;
				i.snapFiredInGesture = false;
				// boundaryLocked intentionally persists — fires on the NEXT gesture
			}, WHEEL_IDLE_MS);

			// Post-snap cooldown
			if (performance.now() - a.completedAt < POST_SNAP_COOLDOWN_MS) return;

			const secs = getSections();
			const idx = currentIndex();
			const sec = secs[idx];
			if (!sec) return;

			// ── Small section: one snap per gesture ──────────────────────
			if (fitsInView(sec)) {
				if (!i.snapFiredInGesture) {
					i.snapFiredInGesture = true;
					snapTo(idx + dir);
				}
				return;
			}

			// ── Large section: we manage all scrolling manually ───────────
			const isLast = idx === secs.length - 1;
			const topY = secTopY(sec);
			const bottomY = sectionBottomScrollY(sec, isLast);
			const curY = window.scrollY;
			const px = deltaPx(e);

			// New gesture with active lock in same direction → snap
			if (
				isNewGesture &&
				i.boundaryLocked &&
				i.boundaryDir === dir &&
				i.boundaryIdx === idx &&
				!i.snapFiredInGesture
			) {
				i.snapFiredInGesture = true;
				snapTo(idx + dir);
				return;
			}

			// Clamp scroll to section bounds and apply manually
			const newY = Math.max(topY, Math.min(bottomY, curY + px));
			window.scrollTo(0, newY);

			// Hit the bottom boundary → lock
			if (dir === 1 && newY >= bottomY - BOUNDARY_TOL) {
				i.boundaryLocked = true;
				i.boundaryDir = 1;
				i.boundaryIdx = idx;
				return;
			}

			// Hit the top boundary → lock
			if (dir === -1 && newY <= topY + BOUNDARY_TOL) {
				i.boundaryLocked = true;
				i.boundaryDir = -1;
				i.boundaryIdx = idx;
				return;
			}

			// Freely scrolling inside the section — cancel any stale lock
			if (i.boundaryLocked && i.boundaryIdx === idx) {
				i.boundaryLocked = false;
				i.boundaryDir = 0;
			}
		}

		// ── Keyboard ──────────────────────────────────────────────────────

		function onKeyDown(e: KeyboardEvent) {
			const SCROLL_KEYS = ["ArrowDown", "ArrowUp", "PageDown", "PageUp", " "];
			if (!SCROLL_KEYS.includes(e.key)) return;

			// Block ALL scroll keys during animation (prevents jitter from held key)
			if (a.active) {
				e.preventDefault();
				return;
			}

			// Post-snap cooldown
			if (performance.now() - a.completedAt < POST_SNAP_COOLDOWN_MS) {
				e.preventDefault();
				return;
			}

			const dir: 1 | -1 =
				e.key === "ArrowDown" || e.key === "PageDown" || e.key === " " ? 1 : -1;

			const secs = getSections();
			const idx = currentIndex();
			const sec = secs[idx];
			if (!sec) return;

			// Small section: snap immediately
			if (fitsInView(sec)) {
				e.preventDefault();
				snapTo(idx + dir);
				return;
			}

			// Large section
			const isLast = idx === secs.length - 1;
			const topY = secTopY(sec);
			const bottomY = sectionBottomScrollY(sec, isLast);
			const atTop = window.scrollY <= topY + BOUNDARY_TOL;
			const atBottom = window.scrollY >= bottomY - BOUNDARY_TOL;

			// Boundary already locked in this direction → snap
			if (i.boundaryLocked && i.boundaryDir === dir && i.boundaryIdx === idx) {
				e.preventDefault();
				snapTo(idx + dir);
				return;
			}

			// Direction reversal cancels lock
			if (i.boundaryLocked && i.boundaryIdx === idx && i.boundaryDir !== dir) {
				i.boundaryLocked = false;
				i.boundaryDir = 0;
			}

			// At boundary: clamp + lock
			if ((dir === 1 && atBottom) || (dir === -1 && atTop)) {
				e.preventDefault();
				// Ensure we're exactly at the boundary (in case of native scroll overshoot)
				if (dir === 1) window.scrollTo(0, bottomY);
				else window.scrollTo(0, topY);
				i.boundaryLocked = true;
				i.boundaryDir = dir;
				i.boundaryIdx = idx;
				return;
			}

			// Let native scroll happen inside the section
		}

		// ── Touch (touchscreen) ───────────────────────────────────────────

		function onTouchStart(e: TouchEvent) {
			i.touchStartY = e.touches[0].clientY;
			i.touchConsumed = false;
			// touchBoundaryLocked intentionally persists for next gesture
		}

		function onTouchMove(e: TouchEvent) {
			const totalDelta = i.touchStartY - e.touches[0].clientY; // positive = scroll down
			if (Math.abs(totalDelta) < 10) return;

			const dir: 1 | -1 = totalDelta > 0 ? 1 : -1;
			const secs = getSections();
			const idx = a.active ? a.toIndex : currentIndex();
			const sec = secs[idx];

			if (a.active) {
				e.preventDefault();
				i.touchConsumed = true;
				if (dir !== a.direction) snapTo(a.fromIndex);
				return;
			}

			if (performance.now() - a.completedAt < POST_SNAP_COOLDOWN_MS) {
				e.preventDefault();
				return;
			}

			if (!sec || i.touchConsumed) return;

			if (fitsInView(sec)) {
				if (Math.abs(totalDelta) >= 30) {
					e.preventDefault();
					i.touchConsumed = true;
					snapTo(idx + dir);
				}
				return;
			}

			// Large section
			if (Math.abs(totalDelta) >= 30) {
				const isLast = idx === secs.length - 1;
				const topY = secTopY(sec);
				const bottomY = sectionBottomScrollY(sec, isLast);
				const atTop = window.scrollY <= topY + BOUNDARY_TOL;
				const atBottom = window.scrollY >= bottomY - BOUNDARY_TOL;

				// Boundary locked from previous gesture → snap
				if (
					i.touchBoundaryLocked &&
					i.touchBoundaryDir === dir &&
					i.touchBoundaryIdx === idx
				) {
					e.preventDefault();
					i.touchConsumed = true;
					snapTo(idx + dir);
					return;
				}

				// Direction reversal cancels lock
				if (
					i.touchBoundaryLocked &&
					i.touchBoundaryIdx === idx &&
					i.touchBoundaryDir !== dir
				) {
					i.touchBoundaryLocked = false;
					i.touchBoundaryDir = 0;
				}

				// At boundary: clamp + lock
				if ((dir === 1 && atBottom) || (dir === -1 && atTop)) {
					e.preventDefault();
					i.touchConsumed = true;
					if (dir === 1) window.scrollTo(0, bottomY);
					else window.scrollTo(0, topY);
					i.touchBoundaryLocked = true;
					i.touchBoundaryDir = dir;
					i.touchBoundaryIdx = idx;
				}
			}
		}

		// ── Register ──────────────────────────────────────────────────────

		window.addEventListener("wheel", onWheel, { passive: false });
		window.addEventListener("keydown", onKeyDown);
		window.addEventListener("touchstart", onTouchStart, { passive: true });
		window.addEventListener("touchmove", onTouchMove, { passive: false });

		return () => {
			window.removeEventListener("wheel", onWheel);
			window.removeEventListener("keydown", onKeyDown);
			window.removeEventListener("touchstart", onTouchStart);
			window.removeEventListener("touchmove", onTouchMove);
			if (a.rafId !== null) cancelAnimationFrame(a.rafId);
			if (i.wheelIdleTimer) clearTimeout(i.wheelIdleTimer);
		};
	}, []);

	return null;
}
