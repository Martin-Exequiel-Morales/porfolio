"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";

type AnimatedNumberProps = {
	num: number;
	suffix?: string;
	/** Animation duration in seconds. Defaults to 1.2s. */
	duration?: number;
};

/**
 * Counter that animates from 0 to `num` with an "expo out" curve when it
 * scrolls into view. Runs once. Pairs neatly with reduced motion: motion's
 * `MotionConfig` collapses the tween to its end state for users who ask
 * for it, so the final number is shown immediately with no animation.
 */
export function AnimatedNumber({
	num,
	suffix = "",
	duration = 1.2,
}: AnimatedNumberProps) {
	const ref = useRef<HTMLSpanElement>(null);
	const motionVal = useMotionValue(0);
	const rounded = useTransform(motionVal, (v) => `${Math.round(v)}${suffix}`);
	const inView = useInView(ref, { once: true, margin: "-40px" });

	useEffect(() => {
		if (!inView) return;
		const ctrl = animate(motionVal, num, {
			duration,
			ease: [0.16, 1, 0.3, 1],
		});
		return () => ctrl.stop();
	}, [inView, motionVal, num, duration]);

	return <motion.span ref={ref}>{rounded}</motion.span>;
}
