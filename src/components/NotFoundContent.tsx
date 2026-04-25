"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useLang } from "@/contexts/LanguageContext";

const copy = {
	es: {
		code: "404",
		title: "Página no encontrada",
		description:
			"Esta ruta no existe o el contenido fue movido. Volvé al inicio para seguir explorando.",
		cta: "Volver al inicio",
	},
	en: {
		code: "404",
		title: "Page not found",
		description:
			"This route doesn't exist or the content has moved. Head back home to keep exploring.",
		cta: "Back to home",
	},
};

export function NotFoundContent() {
	const { lang } = useLang();
	const c = copy[lang];

	return (
		<motion.div
			className="text-center max-w-md"
			initial={{ opacity: 0, y: 12 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4 }}
		>
			<p className="font-mono text-accent text-sm mb-2">{c.code}</p>
			<h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
				{c.title}
			</h1>
			<p className="text-muted text-base leading-relaxed mb-8">
				{c.description}
			</p>
			<Link
				href="/"
				className="inline-flex px-6 py-3 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent-hover transition-colors"
			>
				{c.cta}
			</Link>
		</motion.div>
	);
}
