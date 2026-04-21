"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { personal } from "@/data/personal";
import { useLang } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { translations } from "@/locales";

function SunIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
		</svg>
	);
}

function MoonIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
		</svg>
	);
}

export function NavBar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const { lang, toggle: toggleLang } = useLang();
	const { theme, toggle: toggleTheme } = useTheme();
	const t = translations[lang];

	const links = [
		{ label: t.nav.about, href: "#sobre-mi" },
		{ label: t.nav.experience, href: "#experiencia" },
		{ label: t.nav.technologies, href: "#tecnologias" },
		{ label: t.nav.projects, href: "#proyectos" },
		{ label: t.nav.contact, href: "#contacto" },
	];

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-background/90 backdrop-blur-md border-b border-border"
					: "bg-transparent"
			}`}
		>
			<nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
				<a
					href="#inicio"
					className="font-mono text-sm text-accent hover:text-accent-hover transition-colors"
				>
					Martin Morales
				</a>

				{/* Desktop links */}
				<ul className="hidden sm:flex items-center gap-8">
					{links.map((link) => (
						<li key={link.href}>
							<a
								href={link.href}
								className="text-muted text-sm hover:text-foreground transition-colors"
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>

				{/* Controls: lang + theme + hamburger */}
				<div className="flex items-center gap-2">
					<button
						onClick={toggleLang}
						className="text-muted hover:text-foreground transition-colors text-xs font-mono px-2 py-1 rounded border border-border hover:border-accent/50"
						aria-label="Toggle language"
					>
						{lang === "es" ? "EN" : "ES"}
					</button>

					<button
						onClick={toggleTheme}
						className="text-muted hover:text-foreground transition-colors p-1.5 rounded border border-border hover:border-accent/50"
						aria-label="Toggle theme"
					>
						{theme === "dark" ? <SunIcon /> : <MoonIcon />}
					</button>

					{/* Mobile burger */}
					<button
						className="sm:hidden text-muted hover:text-foreground transition-colors p-1 ml-1"
						onClick={() => setOpen(!open)}
						aria-label="Abrir menú"
					>
						<div className="w-5 h-4 flex flex-col justify-between">
							<span
								className={`block h-px bg-current transition-transform origin-center ${
									open ? "translate-y-[7.5px] rotate-45" : ""
								}`}
							/>
							<span
								className={`block h-px bg-current transition-opacity ${
									open ? "opacity-0" : ""
								}`}
							/>
							<span
								className={`block h-px bg-current transition-transform origin-center ${
									open ? "translate-y-[-7.5px] -rotate-45" : ""
								}`}
							/>
						</div>
					</button>
				</div>
			</nav>

			{/* Mobile menu */}
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="sm:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
					>
						<ul className="px-6 py-4 space-y-4">
							{links.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										className="text-muted text-sm hover:text-foreground transition-colors block"
										onClick={() => setOpen(false)}
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
