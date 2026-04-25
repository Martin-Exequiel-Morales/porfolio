"use client";

import { motion } from "motion/react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { SectionId } from "@/lib/sections";

type SectionProps = {
	id: SectionId;
	title: string;
	subtitle?: string;
	children: React.ReactNode;
	className?: string;
};

/**
 * Layout primitive for the page's content sections.
 *
 * Centralises the otherwise-duplicated `<section>` + `<motion.div>` +
 * `<SectionTitle>` plate that each content section was repeating verbatim.
 * The `whileInView` animation is keyed to `viewport={{ once: true }}` so
 * sections fade in once on first scroll-in and then stay put.
 */
export function Section({
	id,
	title,
	subtitle,
	children,
	className = "",
}: SectionProps) {
	return (
		<section
			id={id}
			className={`py-16 px-6 max-w-4xl mx-auto w-full ${className}`}
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
			>
				<SectionTitle title={title} subtitle={subtitle} />
				{children}
			</motion.div>
		</section>
	);
}
