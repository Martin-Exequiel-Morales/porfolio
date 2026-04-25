import type { Bilingual } from "@/lib/i18n";

const github = "https://github.com/Martin-Exequiel-Morales";
const linkedin = "https://www.linkedin.com/in/martin-morales-2b8303274/";
const email = "martin.exequiel.morales@gmail.com";

export const personal = {
	name: "Martín Exequiel Morales",
	role: {
		es: "Tech Lead · Full Stack Developer",
		en: "Tech Lead · Full Stack Developer",
	} satisfies Bilingual,
	description: {
		es: "Desarrollador fullstack con experiencia en sistemas de diversa índole: portales institucionales, herramientas administrativas, dashboards, minijuegos y exportadores de datos. Busco aplicar mis conocimientos en proyectos web, e-commerce y productos digitales.",
		en: "Full Stack Developer with experience across diverse systems: institutional portals, administrative tools, dashboards, mini-games, and data export interfaces. Looking to apply my skills in web products, e-commerce, and digital projects.",
	} satisfies Bilingual,
	github,
	linkedin,
	email,
};

export type SocialLink = {
	/** Stable id, also used as React key. */
	id: "email" | "linkedin" | "github";
	/** Display label. Email is shown raw; the rest get an "↗" suffix. */
	label: string;
	href: string;
	external: boolean;
};

/**
 * Single source of truth for the contact links shown in the contact card
 * and the footer. Order matters: it's the order they're rendered in.
 */
export const socialLinks: SocialLink[] = [
	{ id: "email", label: email, href: `mailto:${email}`, external: false },
	{ id: "linkedin", label: "LinkedIn ↗", href: linkedin, external: true },
	{ id: "github", label: "GitHub ↗", href: github, external: true },
];
