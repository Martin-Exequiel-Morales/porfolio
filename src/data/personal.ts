import type { Bilingual } from "@/lib/i18n";

const github = "https://github.com/Martin-Exequiel-Morales";
const linkedin = "https://www.linkedin.com/in/martin-exequiel-morales/";
const email = "martin.exequiel.morales@gmail.com";

export const personal = {
	name: "Martín Exequiel Morales",
	role: {
		es: "Full Stack Developer",
		en: "Full Stack Developer",
	} satisfies Bilingual,
	description: {
		es: "Desarrollador fullstack con +4 años construyendo software real: portales con cientos de usuarios activos, herramientas administrativas, dashboards y exportadores de datos entre sistemas. Busco roles 100% remotos —web apps, e-commerce o SaaS— donde aportar valor con código bien escrito.",
		en: "Full Stack Developer with 4+ years building real-world software: portals serving hundreds of active users, admin tools, dashboards, and cross-system data export pipelines. Looking for fully remote roles —web apps, e-commerce, or SaaS— where I can ship well-crafted code.",
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
