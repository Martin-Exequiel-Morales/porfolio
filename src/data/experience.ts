import type { Bilingual } from "@/locales/types";

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
			es: "Dirijo el equipo de desarrollo del área: asigno tareas, determino prioridades, establezco plazos y brindo feedback continuo al equipo. Lideré la adopción del ecosistema JavaScript moderno como estándar para nuevos desarrollos. Diseñé y desarrollé el Portal Institucional: sistema de acceso unificado con autenticación por DNI, validación de permisos por sistema mediante adaptadores independientes y módulos de redirecciones, documentos y tutoriales. Actualmente en desarrollo: un gestor de tareas con vistas Kanban y calendario, con un módulo integrado de medición de calidad de software basado en métricas de QA.",
			en: "Lead the area\u2019s development team: assign tasks, set priorities, establish deadlines, and provide ongoing feedback. Led the adoption of the modern JavaScript ecosystem as the standard for new area developments. Designed and developed the Institutional Portal: a unified access system with DNI-based authentication, per-system permission validation through independent adapters, and modules for redirects, documents, and tutorials. Currently in development: a task manager with Kanban views and calendar, including an integrated software quality measurement module based on QA metrics.",
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
			es: "Mantenimiento y evolución de sistemas internos institucionales en PHP. Desarrollé sistemas de diversa naturaleza: herramientas administrativas, sistemas de cálculo, minijuegos institucionales, interfaces gráficas para volcado y exportación de datos entre sistemas y módulos de gestión para distintos sectores. En 2022 desarrollé una interfaz en Python que integró una API web con firmware Arduino para el control remoto de un robot, explorando la intersección entre desarrollo web e IoT.",
			en: "Maintenance and evolution of internal PHP systems. Developed a diverse range of systems: administrative tools, calculation systems, institutional mini-games, graphical interfaces for data dumping and export between systems, and management modules for different areas. In 2022, developed a Python interface integrating a web API with Arduino firmware for remote robot control, exploring the intersection of web development and IoT.",
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
