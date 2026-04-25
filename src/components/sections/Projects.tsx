"use client";

import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";
import { useLang, useT } from "@/contexts/LanguageContext";

export function Projects() {
	const { lang } = useLang();
	const t = useT();

	return (
		<Section
			id="proyectos"
			title={t.projects.title}
			subtitle={t.projects.subtitle}
		>
			<div className="grid gap-6">
				{projects.map((project, index) => (
					// Outer wrapper owns the entry animation; inner wrapper owns
					// the hover animation. Keeping them on separate motion nodes
					// avoids `whileInView` and `whileHover` competing over `y`,
					// which produces a visible flicker if the user hovers while
					// the card is still appearing.
					<motion.div
						key={project.title.en}
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: index * 0.08 }}
						viewport={{ once: true }}
					>
						<motion.div
							className="card-surface rounded-xl border border-border bg-surface p-6 hover:border-accent/40 transition-colors"
							whileHover={{
								y: -2,
								scale: 1.005,
								transition: { duration: 0.2 },
							}}
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

							{project.highlights ? (
								<ul className="mb-5 space-y-1.5">
									{project.highlights.map((h) => (
										<li
											key={h.en}
											className="text-muted text-sm flex gap-2 items-start"
										>
											<span className="text-accent mt-0.5 shrink-0">▸</span>
											{h[lang]}
										</li>
									))}
								</ul>
							) : null}

							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech) => (
									<Badge key={tech} label={tech} />
								))}
							</div>
						</motion.div>
					</motion.div>
				))}
			</div>
		</Section>
	);
}
