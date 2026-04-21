"use client";

import { motion } from "motion/react";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/locales";
import { personal } from "@/data/personal";

export function Hero() {
	const { lang } = useLang();
	const t = translations[lang];

	return (
		<section
			id="inicio"
			className="min-h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto w-full"
		>
			<motion.p
				className="text-accent font-mono text-sm mb-4"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
			>
				{t.hero.greeting}
			</motion.p>

			<motion.h1
				className="text-5xl sm:text-6xl font-bold text-foreground tracking-tight leading-tight"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.1 }}
			>
				{personal.name}
			</motion.h1>

			<motion.h2
				className="text-2xl sm:text-3xl font-semibold text-muted mt-2"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.2 }}
			>
				{personal.role[lang]}
			</motion.h2>

			<motion.p
				className="mt-6 text-muted text-lg max-w-xl leading-relaxed"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.3 }}
			>
				{personal.description[lang]}
			</motion.p>

			<motion.div
				className="mt-10 flex flex-wrap gap-4"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.4 }}
			>
				<a
					href="#proyectos"
					className="px-6 py-3 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent-hover transition-colors"
				>
					{t.hero.ctaProjects}
				</a>
				<a
					href="#contacto"
					className="px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:border-accent hover:text-accent transition-colors"
				>
					{t.hero.ctaContact}
				</a>
			</motion.div>

			<motion.div
				className="mt-12 flex gap-5"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.4, delay: 0.5 }}
			>
				<a
					href={personal.github}
					target="_blank"
					rel="noopener noreferrer"
					className="text-muted hover:text-accent transition-colors text-sm font-mono"
				>
					GitHub ↗
				</a>
				<a
					href={personal.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					className="text-muted hover:text-accent transition-colors text-sm font-mono"
				>
					LinkedIn ↗
				</a>
			</motion.div>
		</section>
	);
}
