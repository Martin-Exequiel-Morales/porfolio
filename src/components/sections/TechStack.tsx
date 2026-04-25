"use client";

import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { TechIcon } from "@/components/ui/TechIcon";
import { techs } from "@/data/techs";
import { useLang, useT } from "@/contexts/LanguageContext";

export function TechStack() {
	const { lang } = useLang();
	const t = useT();

	return (
		<Section
			id="tecnologias"
			title={t.technologies.title}
			subtitle={t.technologies.subtitle}
		>
			<div className="grid sm:grid-cols-2 gap-6">
				{techs.map((group, index) => (
					// Outer wrapper handles entry; inner one handles hover.
					// Splitting them avoids `whileInView` and `whileHover`
					// fighting over the same `y` track.
					<motion.div
						key={group.category.en}
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: index * 0.08 }}
						viewport={{ once: true }}
					>
						<motion.div
							className="card-surface rounded-xl border border-border bg-surface p-6"
							whileHover={{ y: -2, transition: { duration: 0.2 } }}
						>
							<h3 className="text-sm font-semibold text-accent light:text-muted uppercase tracking-widest mb-4">
								{group.category[lang]}
							</h3>
							<div className="flex flex-wrap gap-2">
								{group.items.map((item) => (
									<span
										key={item}
										className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg bg-surface-2 text-foreground border border-border hover:border-accent/50 hover:text-accent transition-colors"
									>
										<TechIcon name={item} />
										{item}
									</span>
								))}
							</div>
						</motion.div>
					</motion.div>
				))}
			</div>
		</Section>
	);
}
