import type { Bilingual } from "@/lib/i18n";

export type ExperienceItem = {
	company: string;
	role: Bilingual;
	period: Bilingual;
	highlights: Bilingual[];
	tech: string[];
};

export const experience: ExperienceItem[] = [
	{
		company: "Cámara de Representantes de la Provincia de Misiones",
		role: {
			es: "Tech Lead · Full Stack Developer",
			en: "Tech Lead · Full Stack Developer",
		},
		period: { es: "2025 – Presente", en: "2025 – Present" },
		highlights: [
			{
				es: "Coordino el equipo: tareas, prioridades, plazos y feedback continuo.",
				en: "Coordinate the team: tasks, priorities, deadlines, and ongoing feedback.",
			},
			{
				es: "Impulsé Next.js, TypeScript y Prisma como estándar del área.",
				en: "Drove Next.js, TypeScript, and Prisma as the area's new standard.",
			},
			{
				es: "Entregué un cambio troncal del sistema principal en menos de 1 semana.",
				en: "Delivered a core change to the main system in under one week.",
			},
			{
				es: "Migré la conversión a PDF a workers en segundo plano: el usuario sigue cargando mientras se procesa el archivo.",
				en: "Moved PDF conversion to background workers so users keep uploading while files process.",
			},
			{
				es: "Reemplacé cargas DOM completas por fetch async según criterios de búsqueda: de ~6 s a respuesta casi instantánea.",
				en: "Replaced full DOM reloads with async fetch by search criteria: from ~6 s to near-instant response.",
			},
			{
				es: "Migré monolitos PHP (CSS/JS mezclados) a API con clean architecture y assets modulares.",
				en: "Migrated PHP monoliths (mixed CSS/JS) to a clean-architecture API with modular assets.",
			},
		],
		tech: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Prisma",
			"PostgreSQL",
			"MySQL",
			"Zustand",
			"Zod",
			"Docker",
			"Nginx",
			"Jest",
			"Playwright",
		],
	},
	{
		company: "Cámara de Representantes de la Provincia de Misiones",
		role: {
			es: "Desarrollador Web",
			en: "Web Developer",
		},
		period: { es: "2021 – 2023", en: "2021 – 2023" },
		highlights: [
			{
				es: "Mantenimiento y evolución de sistemas internos en PHP: consultas más rápidas e interfaces más fluidas.",
				en: "Maintained and evolved internal PHP systems: faster queries and smoother interfaces.",
			},
			{
				es: "Herramientas administrativas, sistemas de cálculo y exportadores de datos entre sistemas.",
				en: "Built admin tools, calculation systems, and cross-system data export pipelines.",
			},
			{
				es: "Interfaz Python + API + Arduino para control remoto de robot en visitas institucionales (~200 usuarios/semana).",
				en: "Python interface + API + Arduino for remote robot control during institutional visits (~200 users/week).",
			},
		],
		tech: [
			"PHP",
			"JavaScript",
			"HTML",
			"CSS",
			"MySQL",
			"Oracle",
			"Python",
			"Arduino",
		],
	},
];
