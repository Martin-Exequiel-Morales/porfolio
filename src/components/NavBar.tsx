"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { useLang, useT } from "@/contexts/LanguageContext";
import type { SectionId } from "@/lib/sections";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolled } from "@/hooks/useScrolled";
import { BurgerIcon } from "@/components/ui/icons/BurgerIcon";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileMenu } from "@/components/MobileMenu";

export function NavBar() {
	const scrolled = useScrolled(20);
	const [open, setOpen] = useState(false);
	const burgerRef = useRef<HTMLButtonElement>(null);
	const { lang, toggle: toggleLang } = useLang();
	const t = useT();
	const active = useActiveSection();

	// "inicio" is the brand link, not part of the nav menu — so the menu
	// items are the rest of the section ids in order.
	const links: { id: SectionId; label: string; href: string }[] = [
		{ id: "sobre-mi", label: t.nav.about, href: "#sobre-mi" },
		{ id: "experiencia", label: t.nav.experience, href: "#experiencia" },
		{ id: "tecnologias", label: t.nav.technologies, href: "#tecnologias" },
		{ id: "proyectos", label: t.nav.projects, href: "#proyectos" },
		{ id: "contacto", label: t.nav.contact, href: "#contacto" },
	];

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
					Martín Morales
				</a>

				{/* Desktop links */}
				<ul className="hidden sm:flex items-center gap-8">
					{links.map((link) => {
						const isActive = active === link.id;
						return (
							<li key={link.href} className="relative">
								<a
									href={link.href}
									className={`text-sm transition-colors ${
										isActive
											? "text-foreground"
											: "text-muted hover:text-foreground"
									}`}
								>
									{link.label}
								</a>
								{isActive ? (
									<motion.span
										// Shared layoutId animates the underline as it
										// moves between active links instead of cross-fading.
										layoutId="navbar-active-underline"
										className="absolute -bottom-1.5 left-0 right-0 h-px bg-accent"
										transition={{
											type: "spring",
											stiffness: 380,
											damping: 30,
										}}
									/>
								) : null}
							</li>
						);
					})}
				</ul>

				<div className="flex items-center gap-2">
					<button
						onClick={toggleLang}
						className="text-muted hover:text-foreground transition-colors text-xs font-mono px-2 py-1 rounded border border-border hover:border-accent/50"
						aria-label="Toggle language"
					>
						{lang === "es" ? "EN" : "ES"}
					</button>

					<ThemeToggle />

					<button
						ref={burgerRef}
						className="sm:hidden text-muted hover:text-foreground transition-colors p-1 ml-1"
						onClick={() => setOpen((v) => !v)}
						aria-label={open ? "Cerrar menú" : "Abrir menú"}
						aria-expanded={open}
						aria-controls="mobile-menu"
					>
						<BurgerIcon open={open} />
					</button>
				</div>
			</nav>

			<MobileMenu
				open={open}
				links={links}
				activeId={active}
				onClose={() => setOpen(false)}
				returnFocusRef={burgerRef}
			/>
		</header>
	);
}
