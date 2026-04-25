"use client";

import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { socialLinks } from "@/data/personal";
import { useT } from "@/contexts/LanguageContext";

export function Contact() {
	const t = useT();

	return (
		<Section
			id="contacto"
			title={t.contact.title}
			subtitle={t.contact.subtitle}
		>
			<div className="card-surface rounded-xl border border-border bg-surface p-8 max-w-lg">
				<p className="text-muted text-sm leading-relaxed mb-8">
					{t.contact.description}
				</p>

				<div className="space-y-4">
					{socialLinks.map((link, i) => (
						<motion.a
							key={link.id}
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
								{`0${i + 1}.`}
							</span>
							<span className="text-foreground text-sm group-hover:text-accent transition-colors">
								{link.label}
							</span>
						</motion.a>
					))}
				</div>
			</div>
		</Section>
	);
}
