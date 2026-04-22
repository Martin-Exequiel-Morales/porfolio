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
		<section id="contacto" className="py-16 px-6 max-w-4xl mx-auto w-full">
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
						{[
							{
								href: `mailto:${personal.email}`,
								label: personal.email,
								num: "01.",
							},
							{
								href: personal.linkedin,
								label: "LinkedIn ↗",
								num: "02.",
								external: true,
							},
							{
								href: personal.github,
								label: "GitHub ↗",
								num: "03.",
								external: true,
							},
						].map((link, i) => (
							<motion.a
								key={link.num}
								href={link.href}
								{...(link.external
									? { target: "_blank", rel: "noopener noreferrer" }
									: {})}
								className="flex items-center gap-3 group"
								initial={{ opacity: 0, x: -10 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
								viewport={{ once: true }}
							>
								<span className="text-accent light:text-muted text-sm font-mono">
									{link.num}
								</span>
								<span className="text-foreground text-sm group-hover:text-accent transition-colors">
									{link.label}
								</span>
							</motion.a>
						))}
					</div>
				</div>
			</motion.div>
		</section>
	);
}
