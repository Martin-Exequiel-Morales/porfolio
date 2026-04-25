"use client";

import { motion } from "motion/react";

/**
 * "Scroll down" hint anchored to the bottom of the hero. Combines a small
 * fade-in delay with a continuous bobbing animation (the `repeat: Infinity`
 * applies to the whole transition, so opacity also pulses gently — that's
 * intentional, it gives the arrow a breathing rhythm).
 */
export function ScrollDownArrow({ href = "#sobre-mi" }: { href?: string }) {
	return (
		<motion.a
			href={href}
			className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 text-muted hover:text-foreground transition-colors"
			initial={{ opacity: 0, y: -6 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.4,
				delay: 0.8,
				repeat: Infinity,
				repeatType: "reverse",
				repeatDelay: 0.6,
			}}
			aria-label="Scroll down"
		>
			<svg
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M12 5v14M5 12l7 7 7-7" />
			</svg>
		</motion.a>
	);
}
