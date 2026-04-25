"use client";

import { useEffect, useRef } from "react";
import {
	useMotionValue,
	useReducedMotion,
	useSpring,
	type MotionValue,
} from "motion/react";

/**
 * `useMagnetic` — pulls an element gently toward the cursor when it enters
 * the element's "pull radius". Returns a ref to attach to the target and
 * spring-driven motion values for x/y translation.
 *
 * Intended for desktop CTAs only. The hook is a no-op on devices without a
 * fine pointer (touch/coarse) — the cursor never enters its radius there.
 *
 * @param strength  How much the element follows the cursor. 0 = stationary,
 *                  1 = element snaps to cursor. 0.25–0.4 feels natural.
 * @param radius    Distance (px) at which the magnetic effect kicks in. The
 *                  pull is interpolated from 0 at the edge to `strength` at
 *                  the centre.
 */
export function useMagnetic<T extends HTMLElement = HTMLElement>(
	strength = 0.3,
	radius = 90,
): {
	ref: React.RefObject<T | null>;
	x: MotionValue<number>;
	y: MotionValue<number>;
} {
	const ref = useRef<T>(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	// Spring smoothing avoids the jitter of direct cursor tracking.
	const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.5 });
	const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.5 });
	const reduceMotion = useReducedMotion();

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		// Bail on touch devices and when the user requests reduced motion.
		if (
			reduceMotion ||
			(typeof window !== "undefined" &&
				window.matchMedia("(pointer: coarse)").matches)
		) {
			return;
		}

		const onMove = (e: PointerEvent) => {
			const rect = el.getBoundingClientRect();
			const cx = rect.left + rect.width / 2;
			const cy = rect.top + rect.height / 2;
			const dx = e.clientX - cx;
			const dy = e.clientY - cy;
			const dist = Math.hypot(dx, dy);
			if (dist < radius) {
				const k = (1 - dist / radius) * strength;
				x.set(dx * k);
				y.set(dy * k);
			} else if (x.get() !== 0 || y.get() !== 0) {
				x.set(0);
				y.set(0);
			}
		};

		const onLeaveWindow = () => {
			x.set(0);
			y.set(0);
		};

		window.addEventListener("pointermove", onMove);
		window.addEventListener("pointerleave", onLeaveWindow);
		return () => {
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointerleave", onLeaveWindow);
		};
	}, [strength, radius, x, y, reduceMotion]);

	return { ref, x: sx, y: sy };
}
