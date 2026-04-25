"use client";

import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { experience } from "@/data/experience";
import { useLang, useT } from "@/contexts/LanguageContext";

export function Experience() {
	const { lang } = useLang();
	const t = useT();

	return (
		<Section
			id="experiencia"
			title={t.experience.title}
			subtitle={t.experience.subtitle}
		>
			<div className="relative">
				<div className="absolute left-0 top-2 bottom-2 w-px bg-border hidden sm:block" />

				<div className="space-y-10">
					{experience.map((item, index) => (
						<motion.div
							key={`${item.company}-${item.period.en}`}
							className="sm:pl-8 relative"
							initial={{ opacity: 0, x: -10 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							<div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-accent translate-x-[-3.5px] hidden sm:block" />

							<div className="flex items-center gap-2 mb-3 sm:hidden">
								<div className="w-2 h-2 rounded-full bg-accent shrink-0" />
								<span className="text-accent font-mono text-xs">
									{item.period[lang]}
								</span>
							</div>

							<motion.div
								className="card-surface rounded-xl border border-border bg-surface p-6 hover:border-accent/40 transition-colors"
								whileHover={{ y: -2, transition: { duration: 0.2 } }}
							>
								<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
									<h3 className="font-semibold text-foreground text-lg">
										{item.role[lang]}
									</h3>
									<span className="text-accent/80 light:text-muted font-mono text-xs shrink-0 mt-1 hidden sm:block">
										{item.period[lang]}
									</span>
								</div>

								<p className="text-muted text-sm mb-4">{item.company}</p>

								<p className="text-muted text-sm leading-relaxed mb-5">
									{item.description[lang]}
								</p>

								<div className="flex flex-wrap gap-2">
									{item.tech.map((tech) => (
										<Badge key={tech} label={tech} />
									))}
								</div>
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>
		</Section>
	);
}
