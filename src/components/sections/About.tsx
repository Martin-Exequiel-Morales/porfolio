"use client";

import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { useLang, useT } from "@/contexts/LanguageContext";
import type { Bilingual } from "@/lib/i18n";

type Highlight = {
	value: string;
	num: number | null;
	suffix: string;
	label: Bilingual;
};

const highlights: Highlight[] = [
	{
		value: "4+",
		num: 4,
		suffix: "+",
		label: { es: "años de experiencia", en: "years of experience" },
	},
	{
		value: "360+",
		num: 360,
		suffix: "+",
		label: {
			es: "usuarios activos en producción",
			en: "active users in production",
		},
	},
	{
		value: "10+",
		num: 10,
		suffix: "+",
		label: { es: "sistemas construidos", en: "systems built" },
	},
];

export function About() {
	const { lang } = useLang();
	const t = useT();

	return (
		<Section id="sobre-mi" title={t.about.title}>
			<motion.div
				className="grid grid-cols-3 gap-4 mb-10"
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.1 }}
				viewport={{ once: true }}
			>
				{highlights.map((h) => (
					<div
						key={h.value}
						className="rounded-xl border border-border bg-surface p-5 text-center"
					>
						<p className="text-2xl font-bold text-accent">
							{h.num !== null ? (
								<AnimatedNumber num={h.num} suffix={h.suffix} />
							) : (
								h.value
							)}
						</p>
						<p className="mt-1 text-xs text-muted">{h.label[lang]}</p>
					</div>
				))}
			</motion.div>

			<div className="grid sm:grid-cols-2 gap-10 text-muted leading-relaxed">
				<motion.div
					className="space-y-4"
					initial={{ opacity: 0, x: -16 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<p>{t.about.p1}</p>
					<p>{t.about.p2}</p>
				</motion.div>
				<motion.div
					className="space-y-4"
					initial={{ opacity: 0, x: 16 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					viewport={{ once: true }}
				>
					<p>{t.about.p3}</p>
					<p>{t.about.p4}</p>
				</motion.div>
			</div>
		</Section>
	);
}
