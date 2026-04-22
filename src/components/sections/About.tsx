"use client";

import { useRef } from "react";
import {
	motion,
	useInView,
	useMotionValue,
	useTransform,
	animate,
} from "motion/react";
import { useEffect } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

const highlights = [
	{
		value: "4+",
		num: 4,
		suffix: "+",
		label: { es: "años de experiencia", en: "years of experience" },
	},
	{
		value: "10+",
		num: 10,
		suffix: "+",
		label: { es: "sistemas construidos", en: "systems built" },
	},
	{
		value: "Full Stack",
		num: null,
		suffix: "",
		label: { es: "Frontend & Backend", en: "Frontend & Backend" },
	},
];

function AnimatedNumber({ num, suffix }: { num: number; suffix: string }) {
	const ref = useRef<HTMLSpanElement>(null);
	const motionVal = useMotionValue(0);
	const rounded = useTransform(motionVal, (v) => `${Math.round(v)}${suffix}`);
	const inView = useInView(ref, { once: true, margin: "-40px" });

	useEffect(() => {
		if (inView) {
			const ctrl = animate(motionVal, num, {
				duration: 1.2,
				ease: [0.16, 1, 0.3, 1],
			});
			return () => ctrl.stop();
		}
	}, [inView, motionVal, num]);

	return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function About() {
	const { lang } = useLang();
	const t = translations[lang];

	return (
		<section id="sobre-mi" className="py-16 px-6 max-w-4xl mx-auto w-full">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
			>
				<SectionTitle title={t.about.title} />

				{/* Highlights */}
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
			</motion.div>
		</section>
	);
}
