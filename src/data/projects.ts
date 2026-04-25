import type { Bilingual } from "@/lib/i18n";

export type Project = {
	title: Bilingual;
	description: Bilingual;
	tech: string[];
	status: "completed" | "in-progress";
	highlights?: Bilingual[];
};

export const projects: Project[] = [
	{
		title: { es: "Portal Institucional", en: "Portal Institucional" },
		status: "in-progress",
		description: {
			es: "Sistema de acceso unificado para los usuarios de la Cámara de Representantes. Centraliza el acceso a todos los sistemas internos en un único punto de entrada autenticado. Pendiente: integración de un chatbot con modelo de IA ejecutable en servidores internos.",
			en: "Unified access system for Chamber of Representatives users. Centralizes access to all internal systems through a single authenticated entry point. Pending: integration of an AI chatbot model deployable on internal servers.",
		},
		highlights: [
			{
				es: "Autenticación mediante DNI sin credenciales adicionales",
				en: "DNI-based authentication without additional credentials",
			},
			{
				es: "Validación de permisos por sistema a través de adaptadores independientes",
				en: "Per-system permission validation through independent adapters",
			},
			{
				es: "Panel con accesos directos, documentos institucionales y enlaces de utilidad",
				en: "Dashboard with shortcuts, institutional documents, and utility links",
			},
			{
				es: "Sistema de tutoriales para guiar a usuarios en operaciones cotidianas",
				en: "Tutorial system to guide users through everyday operations",
			},
			{
				es: "Chatbot con IA local en desarrollo",
				en: "Local AI chatbot currently in development",
			},
		],
		tech: [
			"Next.js",
			"React",
			"TypeScript",
			"Prisma",
			"PostgreSQL",
			"Tailwind CSS",
			"Zod",
		],
	},
	{
		title: {
			es: "G.E.S.T.O.R",
			en: "G.E.S.T.O.R",
		},
		status: "in-progress",
		description: {
			es: "Herramienta de gestión de tareas con vistas Kanban y calendario para el seguimiento de proyectos internos. Incluye un módulo de medición de calidad de software basado en métricas de QA: ciclos de prueba, tasa de reincidencia de errores y reportes de rendimiento por proyecto.",
			en: "Task management tool with Kanban views and calendar for tracking internal projects. Includes a software quality measurement module based on QA metrics: test cycles, error recurrence rates, and project performance reports.",
		},
		highlights: [
			{
				es: "Vista Kanban con drag & drop para gestión visual del flujo de trabajo",
				en: "Kanban view with drag & drop for visual workflow management",
			},
			{
				es: "Calendario integrado con asignación de fechas y responsables",
				en: "Integrated calendar with date and assignee management",
			},
			{
				es: "Módulo de calidad: métricas de QA, ciclos de prueba y reportes de rendimiento",
				en: "Quality module: QA metrics, test cycles, and performance reports",
			},
		],
		tech: [
			"Next.js",
			"TypeScript",
			"Prisma",
			"PostgreSQL",
			"Zustand",
			"Tailwind CSS",
			"Jest",
			"Playwright",
		],
	},
	{
		title: { es: "Control de Robot vía Web", en: "Web-Based Robot Control" },
		status: "completed",
		description: {
			es: "Interfaz en Python que integra una API web con firmware Arduino para el control remoto de un robot mediante comandos HTTP o una aplicación interactiva. Proyecto exploratorio en la intersección entre desarrollo web e IoT.",
			en: "Python interface integrating a web API with Arduino firmware for remote robot control via HTTP commands or an interactive application. An exploratory project at the intersection of web development and IoT.",
		},
		highlights: [
			{
				es: "Control en tiempo real mediante comandos HTTP",
				en: "Real-time control via HTTP commands",
			},
			{
				es: "Aplicación interactiva para control manual",
				en: "Interactive application for manual control",
			},
			{
				es: "Integración directa con firmware Arduino",
				en: "Direct integration with Arduino firmware",
			},
		],
		tech: ["Python", "Arduino", "REST API", "IoT"],
	},
];
