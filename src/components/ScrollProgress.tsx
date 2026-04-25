"use client";

/**
 * `ScrollProgress` — thin bar pinned to the very top of the viewport that
 * fills horizontally as the user scrolls the page.
 *
 * For users without reduced motion, a spring smooths the value so quick
 * wheel deltas don't translate to jittery jumps. For users who request
 * reduced motion, we skip the spring entirely and bind directly to the
 * raw `scrollYProgress` — instant, no easing, no extra rAF work.
 *
 * Sits above the navbar (z-index higher than `z-50`) so it stays visible.
 */

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
	const reduce = useReducedMotion();
	const { scrollYProgress } = useScroll();
	const smoothed = useSpring(scrollYProgress, {
		stiffness: 140,
		damping: 28,
		restDelta: 0.001,
	});
	const scaleX = reduce ? scrollYProgress : smoothed;

	return (
		<motion.div
			aria-hidden="true"
			className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-accent z-60 pointer-events-none"
			style={{ scaleX }}
		/>
	);
}
