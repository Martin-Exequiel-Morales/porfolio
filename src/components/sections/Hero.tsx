"use client";

import Image from "next/image";
import {
	motion,
	AnimatePresence,
	useScroll,
	useTransform,
} from "motion/react";
import { useState, useEffect, useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/locales";
import { personal } from "@/data/personal";
import { useMagnetic } from "@/hooks/useMagnetic";

export function Hero() {
	const { lang } = useLang();
	const t = translations[lang];
	// Cursor stays visible until the name has animated in (delay 0.1 + duration 0.4 = ~600ms)
	const [showCursor, setShowCursor] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setShowCursor(false), 1200);
		return () => clearTimeout(timer);
	}, []);

	// Parallax: as the user scrolls past the hero, its background gradient
	// trails behind the foreground content, giving a subtle sense of depth.
	const sectionRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"],
	});
	const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
	const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

	// Magnetic CTAs (desktop only — the hook auto-disables on touch and
	// when the user prefers reduced motion).
	const projectsCta = useMagnetic<HTMLAnchorElement>();
	const contactCta = useMagnetic<HTMLAnchorElement>();

	return (
		<section
			ref={sectionRef}
			id="inicio"
			className="relative min-h-screen flex flex-col justify-center pt-16 px-6 max-w-4xl mx-auto w-full"
		>
			{/* Background gradient with parallax */}
			<motion.div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 overflow-hidden"
				style={{
					y: bgY,
					opacity: bgOpacity,
					background:
						"radial-gradient(ellipse 80% 40% at 50% -10%, rgba(99,102,241,0.11), transparent)",
				}}
			/>
			{/* Avatar */}
			<motion.div
				className="mb-8"
				initial={{ opacity: 0, scale: 0.85 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Image
					src="/personal_photo.webp"
					alt="Martín Morales"
					width={96}
					height={96}
					className="rounded-full border-2 border-border object-cover w-24 h-24"
					priority
				/>
			</motion.div>

			<motion.p
				className="text-accent font-mono text-sm mb-4 flex items-center gap-0"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
			>
				{t.hero.greeting}
				<AnimatePresence>
					{showCursor && (
						<motion.span
							key="cursor"
							initial={{ opacity: 1 }}
							animate={{ opacity: [1, 0, 1] }}
							exit={{ opacity: 0, transition: { duration: 0.2 } }}
							transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
							className="ml-0.5 inline-block"
						>
							|
						</motion.span>
					)}
				</AnimatePresence>
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
				<motion.a
					ref={projectsCta.ref}
					href="#proyectos"
					style={{ x: projectsCta.x, y: projectsCta.y }}
					className="px-6 py-3 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent-hover transition-colors"
				>
					{t.hero.ctaProjects}
				</motion.a>
				<motion.a
					ref={contactCta.ref}
					href="#contacto"
					style={{ x: contactCta.x, y: contactCta.y }}
					className="px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:border-accent hover:text-accent transition-colors"
				>
					{t.hero.ctaContact}
				</motion.a>
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

			{/* Scroll indicator */}
			<motion.a
				href="#sobre-mi"
				className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 text-muted hover:text-foreground transition-colors"
				initial={{ opacity: 0, y: -6 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.4,
					delay: 0.8,
					repeat: Infinity,
					repeatType: "reverse",
					repeatDelay: 0.6,
				}}
				aria-label="Scroll down"
			>
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M12 5v14M5 12l7 7 7-7" />
				</svg>
			</motion.a>
		</section>
	);
}
