import type { Bilingual } from "@/lib/i18n";

export type ExperienceItem = {
	company: string;
	role: Bilingual;
	period: Bilingual;
	description: Bilingual;
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
		description: {
			es: "Lidero el área de desarrollo: asigno tareas, defino prioridades, establezco plazos y acompaño al equipo con feedback continuo. Promoví y ejecuté la adopción del ecosistema JavaScript moderno (Next.js + TypeScript + Prisma) como nuevo estándar del área. Diseñé y desarrollé el Portal Institucional, hoy con 360+ usuarios activos: acceso unificado con autenticación por DNI, validación de permisos por sistema mediante adaptadores independientes y un módulo de tutoriales que redujo el volumen de consultas básicas internas. La capa de adaptadores conecta a la base de datos de todos los sistemas internos y deja preparada la infraestructura para alimentar a futuro una IA institucional.",
			en: "Lead the area's development team: assigning tasks, setting priorities, deadlines, and providing ongoing feedback. Drove the adoption of the modern JavaScript ecosystem (Next.js + TypeScript + Prisma) as the area's new standard. Designed and built the Institutional Portal, currently used by 360+ active users: a unified access system with DNI-based authentication, per-system permission validation through independent adapters, and a tutorials module that cut the volume of basic internal support queries. The adapter layer connects to every internal system's database and lays the groundwork for a future institution-wide AI fed by that data.",
		},
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
		description: {
			es: "Mantenimiento y evolución de sistemas internos en PHP: optimicé tiempos de consulta y refactoricé interfaces visuales para mejorar fluidez y usabilidad sobre flujos en uso diario. Desarrollé herramientas administrativas, sistemas de cálculo, minijuegos institucionales, interfaces para volcado y exportación de datos entre sistemas y módulos de gestión por sector. En 2022 construí una interfaz en Python que integra una API web con firmware Arduino para el control remoto de un robot —utilizada hoy por ~200 usuarios por semana en visitas de instituciones educativas y de otros ámbitos, junto a los minijuegos institucionales que también desarrollé.",
			en: "Maintenance and evolution of internal PHP systems: optimized query times and refactored visual interfaces to improve flow and usability across day-to-day workflows. Built administrative tools, calculation systems, institutional mini-games, data dump and export interfaces between systems, and area-specific management modules. In 2022, built a Python interface integrating a web API with Arduino firmware for remote robot control —used today by ~200 weekly users during visits from educational and other institutions, alongside the mini-games I also developed.",
		},
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
