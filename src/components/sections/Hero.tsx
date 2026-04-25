"use client";

import Image from "next/image";
import { useRef } from "react";
import {
	motion,
	useMotionValue,
	useReducedMotion,
	useScroll,
	useTransform,
} from "motion/react";
import { useLang, useT } from "@/contexts/LanguageContext";
import { personal } from "@/data/personal";
import { BlinkingCursor } from "@/components/ui/BlinkingCursor";
import { ScrollDownArrow } from "@/components/ui/ScrollDownArrow";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
	const { lang } = useLang();
	const t = useT();
	const reduce = useReducedMotion();

	// Parallax: as the user scrolls past the hero, its background gradient
	// trails behind the foreground content for a subtle sense of depth.
	// Motion values bypass `MotionConfig reducedMotion`, so we honour it
	// manually here — users who request reduced motion get a static
	// background.
	const sectionRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"],
	});
	const liveBgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
	const liveBgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
	const staticBgY = useMotionValue("0%");
	const staticBgOpacity = useMotionValue(1);
	const bgY = reduce ? staticBgY : liveBgY;
	const bgOpacity = reduce ? staticBgOpacity : liveBgOpacity;

	return (
		<section
			ref={sectionRef}
			id="inicio"
			className="relative min-h-screen flex flex-col justify-center pt-16 px-6 max-w-4xl mx-auto w-full"
		>
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
				<BlinkingCursor />
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
				<MagneticButton
					href="#proyectos"
					className="px-6 py-3 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent-hover transition-colors"
				>
					{t.hero.ctaProjects}
				</MagneticButton>
				<MagneticButton
					href="#contacto"
					className="px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:border-accent hover:text-accent transition-colors"
				>
					{t.hero.ctaContact}
				</MagneticButton>
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

			<ScrollDownArrow />
		</section>
	);
}
