"use client";

import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "@/contexts/ThemeContext";
import { SunIcon } from "@/components/ui/icons/SunIcon";
import { MoonIcon } from "@/components/ui/icons/MoonIcon";

/**
 * Theme toggle. The icon swap is animated with a small rotation +
 * crossfade so the transition feels intentional instead of "popping" from
 * one frame to the next. `MotionConfig reducedMotion="user"` collapses
 * the animation for users who request it.
 */
export function ThemeToggle() {
	const { theme, toggle } = useTheme();
	return (
		<button
			onClick={toggle}
			className="text-muted hover:text-foreground transition-colors p-1.5 rounded border border-border hover:border-accent/50 relative w-7 h-7 flex items-center justify-center overflow-hidden"
			aria-label="Toggle theme"
		>
			<AnimatePresence mode="wait" initial={false}>
				<motion.span
					key={theme}
					initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
					animate={{ opacity: 1, rotate: 0, scale: 1 }}
					exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
					transition={{ duration: 0.18, ease: "easeOut" }}
					className="absolute inline-flex"
				>
					{theme === "dark" ? <SunIcon /> : <MoonIcon />}
				</motion.span>
			</AnimatePresence>
		</button>
	);
}
