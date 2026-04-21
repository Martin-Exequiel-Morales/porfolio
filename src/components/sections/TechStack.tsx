"use client";

import { motion } from "motion/react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { techs } from "@/data/techs";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

export function TechStack() {
	const { lang } = useLang();
	const t = translations[lang];

	return (
		<section id="tecnologias" className="py-24 px-6 max-w-4xl mx-auto w-full">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
			>
				<SectionTitle
					title={t.technologies.title}
					subtitle={t.technologies.subtitle}
				/>

				<div className="grid sm:grid-cols-2 gap-6">
					{techs.map((group, index) => (
						<motion.div
							key={group.category.en}
							className="rounded-xl border border-border bg-surface p-6"
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: index * 0.08 }}
							viewport={{ once: true }}
						>
							<h3 className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">
								{group.category[lang]}
							</h3>
							<div className="flex flex-wrap gap-2">
								{group.items.map((item) => (
									<span
										key={item}
										className="px-3 py-1.5 text-sm rounded-lg bg-surface-2 text-foreground border border-border hover:border-accent/50 hover:text-accent transition-colors"
									>
										{item}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
