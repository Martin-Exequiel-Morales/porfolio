"use client";

import { motion } from "motion/react";
import { useMagnetic } from "@/hooks/useMagnetic";

type MagneticButtonProps = React.ComponentProps<typeof motion.a>;

/**
 * Anchor button with a "magnetic" pull toward the cursor on desktop.
 * Falls back to a normal anchor on touch devices and when the user prefers
 * reduced motion (the `useMagnetic` hook handles both).
 *
 * Spreads the rest of the props onto the underlying `motion.a`, so it
 * accepts `href`, `className`, `onClick`, etc., transparently.
 */
export function MagneticButton(props: MagneticButtonProps) {
	const { ref, x, y } = useMagnetic<HTMLAnchorElement>();
	return <motion.a ref={ref} style={{ x, y }} {...props} />;
}
