"use client";

import { motion } from "motion/react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

export function Projects() {
	const { lang } = useLang();
	const t = translations[lang];

	return (
		<section id="proyectos" className="py-16 px-6 max-w-4xl mx-auto w-full">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
			>
				<SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />

				<div className="grid gap-6">
					{projects.map((project, index) => (
						<motion.div
							key={project.title.en}
							className="card-surface rounded-xl border border-border bg-surface p-6 hover:border-accent/40 transition-colors"
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							whileHover={{
								y: -2,
								scale: 1.005,
								transition: { duration: 0.2 },
							}}
							transition={{ duration: 0.4, delay: index * 0.08 }}
							viewport={{ once: true }}
						>
							<div className="flex items-start justify-between gap-4 mb-3">
								<h3 className="font-semibold text-foreground text-lg">
									{project.title[lang]}
								</h3>
								<span
									className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full border ${
										project.status === "completed"
											? "text-emerald-500 border-emerald-500/30 bg-emerald-500/10"
											: "text-amber-500 border-amber-500/30 bg-amber-500/10"
									}`}
								>
									{project.status === "completed"
										? t.projects.completed
										: t.projects.inProgress}
								</span>
							</div>

							<p className="text-muted text-base leading-relaxed mb-4 text-justify">
								{project.description[lang]}
							</p>

							{project.highlights && (
								<ul className="mb-5 space-y-1.5">
									{project.highlights.map((h, i) => (
										<li
											key={i}
											className="text-muted text-sm flex gap-2 items-start"
										>
											<span className="text-accent mt-0.5 shrink-0">▸</span>
											{h[lang]}
										</li>
									))}
								</ul>
							)}

							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech) => (
									<Badge key={tech} label={tech} />
								))}
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
