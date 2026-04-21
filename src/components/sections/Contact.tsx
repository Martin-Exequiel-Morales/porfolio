"use client";

import { motion } from "motion/react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { personal } from "@/data/personal";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

export function Contact() {
	const { lang } = useLang();
	const t = translations[lang];

	return (
		<section id="contacto" className="py-24 px-6 max-w-4xl mx-auto w-full">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
			>
				<SectionTitle title={t.contact.title} subtitle={t.contact.subtitle} />

				<div className="card-surface rounded-xl border border-border bg-surface p-8 max-w-lg">
					<p className="text-muted text-sm leading-relaxed mb-8">
						{t.contact.description}
					</p>

					<div className="space-y-4">
						<a
							href={`mailto:${personal.email}`}
							className="flex items-center gap-3 group"
						>
							<span className="text-accent light:text-muted text-sm font-mono">
								01.
							</span>
							<span className="text-foreground text-sm group-hover:text-accent transition-colors">
								{personal.email}
							</span>
						</a>

						<a
							href={personal.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-3 group"
						>
							<span className="text-accent light:text-muted text-sm font-mono">
								02.
							</span>
							<span className="text-foreground text-sm group-hover:text-accent transition-colors">
								LinkedIn ↗
							</span>
						</a>

						<a
							href={personal.github}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-3 group"
						>
							<span className="text-accent light:text-muted text-sm font-mono">
								03.
							</span>
							<span className="text-foreground text-sm group-hover:text-accent transition-colors">
								GitHub ↗
							</span>
						</a>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
