"use client";

import { useEffect, useState } from "react";
import { SECTION_IDS, NAV_HEIGHT, type SectionId } from "@/lib/sections";

/**
 * Returns the id of the section the user is "currently reading", computed
 * with an `IntersectionObserver`.
 *
 * Strategy: pick a horizontal "reading line" a few pixels below the navbar
 * and treat the section that contains that line as active. We model it via
 * `rootMargin: "-{NAV_HEIGHT}px 0px -55% 0px"` — only intersections whose
 * top has already crossed the navbar AND whose bottom hasn't yet gone past
 * the lower 55% of the viewport count.
 *
 * `IntersectionObserver` runs off the main thread on most engines, so we
 * pay zero work per scroll event. The previous implementation re-read
 * `offsetTop` on every scroll listener tick, which was both wasteful and
 * incorrect near the document top (it would skip past sections during
 * smooth anchor scrolls that move multiple `offsetTop`s past the probe in
 * a single frame).
 *
 * Last-section guard: when the user reaches the bottom of the page, the
 * observer rules above can fail to mark the final section active (it may
 * be too short to fill the reading band). We track `scroll`/`resize` only
 * to flip to the last id in that boundary case.
 */
export function useActiveSection(): SectionId {
	const [active, setActive] = useState<SectionId>(SECTION_IDS[0]);

	useEffect(() => {
		const visibility = new Map<SectionId, number>();

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					visibility.set(
						entry.target.id as SectionId,
						entry.intersectionRatio,
					);
				}
				// Of the sections currently inside the reading band, pick the
				// one with the largest intersection ratio. Falling back to the
				// first id keeps things sane if everything is at 0.
				let best: SectionId | null = null;
				let bestRatio = 0;
				for (const id of SECTION_IDS) {
					const ratio = visibility.get(id) ?? 0;
					if (ratio > bestRatio) {
						bestRatio = ratio;
						best = id;
					}
				}
				if (best) setActive(best);
			},
			{
				rootMargin: `-${NAV_HEIGHT}px 0px -55% 0px`,
				threshold: [0, 0.25, 0.5, 0.75, 1],
			},
		);

		const elements: HTMLElement[] = [];
		for (const id of SECTION_IDS) {
			const el = document.getElementById(id);
			if (el) {
				observer.observe(el);
				elements.push(el);
			}
		}

		const onBoundaryCheck = () => {
			const atBottom =
				window.innerHeight + window.scrollY >=
				document.documentElement.scrollHeight - 4;
			if (atBottom) setActive(SECTION_IDS[SECTION_IDS.length - 1]);
		};
		onBoundaryCheck();
		window.addEventListener("scroll", onBoundaryCheck, { passive: true });
		window.addEventListener("resize", onBoundaryCheck);

		return () => {
			observer.disconnect();
			window.removeEventListener("scroll", onBoundaryCheck);
			window.removeEventListener("resize", onBoundaryCheck);
		};
	}, []);

	return active;
}
