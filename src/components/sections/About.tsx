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
		value: "410+",
		num: 410,
		suffix: "+",
		label: {
			es: "usuarios activos en producción",
			en: "active users in production",
		},
	},
	{
		value: "6s → 5ms",
		num: null,
		suffix: "",
		label: {
			es: "mejora en tiempos de carga críticos",
			en: "improvement on critical load times",
		},
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

			<motion.div
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.15 }}
				viewport={{ once: true }}
			>
				<p className="text-sm font-mono text-accent mb-4">{t.about.focusTitle}</p>
				<div className="grid sm:grid-cols-3 gap-4 mb-10">
					{t.about.focus.map((item) => (
						<div
							key={item.label}
							className="rounded-xl border border-border bg-surface p-5"
						>
							<p className="font-semibold text-foreground mb-2">{item.label}</p>
							<p className="text-sm text-muted leading-relaxed">{item.detail}</p>
						</div>
					))}
				</div>
			</motion.div>

			<motion.p
				className="text-muted leading-relaxed max-w-3xl border-l-2 border-accent/40 pl-4"
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.2 }}
				viewport={{ once: true }}
			>
				{t.about.closing}
			</motion.p>
		</Section>
	);
}
