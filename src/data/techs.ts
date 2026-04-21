import type { Bilingual } from "@/locales/types";

export type TechCategory = {
	category: Bilingual;
	items: string[];
};

export const techs: TechCategory[] = [
	{
		category: { es: "Frontend", en: "Frontend" },
		items: [
			"React",
			"Next.js",
			"TypeScript",
			"JavaScript",
			"CSS",
			"Tailwind CSS",
			"Zustand",
		],
	},
	{
		category: { es: "Backend", en: "Backend" },
		items: ["Node.js", "PHP", "Python", "Prisma", "Zod"],
	},
	{
		category: { es: "Bases de datos", en: "Databases" },
		items: ["PostgreSQL", "MySQL", "Oracle"],
	},
	{
		category: { es: "DevOps", en: "DevOps" },
		items: ["Docker", "Nginx", "Git", "Jest", "Playwright", "Linux (Pop OS)"],
	},
	{
		category: { es: "Herramientas", en: "Tools" },
		items: ["DBeaver", "SQL Developer", "SQLyog", "VS Code"],
	},
];
