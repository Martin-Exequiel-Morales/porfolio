"use client";

import { motion } from "motion/react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

export function About() {
	const { lang } = useLang();
	const t = translations[lang];

	return (
		<section id="sobre-mi" className="py-24 px-6 max-w-4xl mx-auto w-full">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
			>
				<SectionTitle title={t.about.title} />

				<div className="grid sm:grid-cols-2 gap-10 text-muted leading-relaxed">
					<motion.div
						className="space-y-4"
						initial={{ opacity: 0, x: -16 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}
					>
						<p>{t.about.p1}</p>
						<p>{t.about.p2}</p>
					</motion.div>
					<motion.div
						className="space-y-4"
						initial={{ opacity: 0, x: 16 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<p>{t.about.p3}</p>
						<p>{t.about.p4}</p>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
