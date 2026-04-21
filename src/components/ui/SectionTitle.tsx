"use client";

import { motion } from "motion/react";

type SectionTitleProps = {
	title: string;
	subtitle?: string;
};

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
	return (
		<div className="mb-12">
			<h2 className="text-3xl font-bold text-foreground tracking-tight">
				{title}
			</h2>
			{subtitle && <p className="mt-2 text-muted text-base">{subtitle}</p>}
			<motion.div
				className="mt-4 h-px bg-accent origin-left"
				initial={{ scaleX: 0, width: 48 }}
				whileInView={{ scaleX: 1 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				viewport={{ once: true }}
			/>
		</div>
	);
}
