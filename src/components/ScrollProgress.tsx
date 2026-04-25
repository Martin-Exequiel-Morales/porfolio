"use client";

/**
 * `ScrollProgress` — thin bar pinned to the very top of the viewport that
 * fills horizontally as the user scrolls the page. A spring smooths the
 * value so quick wheel deltas don't translate to jittery jumps.
 *
 * Sits above the navbar (z-index higher than `z-50`) so it stays visible.
 */

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 140,
		damping: 28,
		restDelta: 0.001,
	});

	return (
		<motion.div
			aria-hidden="true"
			className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-accent z-60 pointer-events-none"
			style={{ scaleX }}
		/>
	);
}
