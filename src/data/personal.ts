import type { Bilingual } from "@/lib/i18n";

const github = "https://github.com/Martin-Exequiel-Morales";
const gitlab = "https://gitlab.com/martin.exequiel.morales";
const linkedin = "https://www.linkedin.com/in/martin-exequiel-morales/";
const email = "martin.exequiel.morales@gmail.com";

export const personal = {
	name: "Martín Exequiel Morales",
	role: {
		es: "Full Stack Developer",
		en: "Full Stack Developer",
	} satisfies Bilingual,
	description: {
		es: "Desarrollo software pensando en qué objetivo cumple y cómo lograrlo: rendimiento, facilitarle la vida al usuario y conectar con su experiencia.",
		en: "I build software around the goal it serves and how to get there — performance, making users' lives easier, and staying connected to their experience.",
	} satisfies Bilingual,
	github,
	gitlab,
	linkedin,
	email,
};

export type SocialLink = {
	/** Stable id, also used as React key. */
	id: "email" | "linkedin" | "github" | "gitlab";
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
	{ id: "gitlab", label: "GitLab ↗", href: gitlab, external: true },
];
