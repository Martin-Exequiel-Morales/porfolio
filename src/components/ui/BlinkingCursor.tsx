"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * Blinking pipe (`|`) that fades out after `lifetimeMs`. Used to give the
 * hero greeting that "still being typed" feel without trapping the cursor
 * forever.
 */
export function BlinkingCursor({
	lifetimeMs = 1200,
	className = "ml-0.5 inline-block",
}: {
	lifetimeMs?: number;
	className?: string;
}) {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const t = setTimeout(() => setVisible(false), lifetimeMs);
		return () => clearTimeout(t);
	}, [lifetimeMs]);

	return (
		<AnimatePresence>
			{visible ? (
				<motion.span
					key="cursor"
					initial={{ opacity: 1 }}
					animate={{ opacity: [1, 0, 1] }}
					exit={{ opacity: 0, transition: { duration: 0.2 } }}
					transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
					className={className}
				>
					|
				</motion.span>
			) : null}
		</AnimatePresence>
	);
}
