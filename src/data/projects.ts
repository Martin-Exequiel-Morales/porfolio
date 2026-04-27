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
		title: { es: "Portal Institucional", en: "Institutional Portal" },
		status: "completed",
		description: {
			es: "Sistema de acceso unificado para los usuarios de la Cámara de Representantes. Centraliza el acceso a todos los sistemas internos en un único punto de entrada autenticado y, por diseño, deja la institución en condiciones de alimentar a futuro una IA con los datos de todos los sistemas conectados.",
			en: "Unified access system for Chamber of Representatives users. Centralizes access to all internal systems through a single authenticated entry point and, by design, positions the institution to feed a future AI with data from every connected system.",
		},
		highlights: [
			{
				es: "360+ usuarios activos en producción",
				en: "360+ active users in production",
			},
			{
				es: "Módulo de tutoriales que redujo el volumen de consultas básicas internas",
				en: "Tutorials module that cut the volume of basic internal support queries",
			},
			{
				es: "Autenticación por DNI sin credenciales adicionales",
				en: "DNI-based authentication without additional credentials",
			},
			{
				es: "Validación de permisos por sistema mediante adaptadores independientes",
				en: "Per-system permission validation through independent adapters",
			},
			{
				es: "Capa de adaptadores que conecta con todas las bases de datos internas, lista para alimentar una IA institucional",
				en: "Adapter layer connecting to every internal database, ready to feed an institution-wide AI",
			},
			{
				es: "Panel con accesos directos, documentos institucionales y enlaces de utilidad",
				en: "Dashboard with shortcuts, institutional documents, and utility links",
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
			es: "Robot interactivo y minijuegos institucionales",
			en: "Interactive robot and institutional mini-games",
		},
		status: "completed",
		description: {
			es: "Conjunto de experiencias interactivas para visitas a la institución: una interfaz en Python que integra una API web con firmware Arduino para controlar un robot, junto a una serie de minijuegos web. En uso desde 2022, hoy lo utilizan aproximadamente 200 usuarios por semana durante visitas de instituciones educativas y de otros ámbitos.",
			en: "Set of interactive experiences for institutional visits: a Python interface integrating a web API with Arduino firmware to control a robot, alongside a suite of web-based mini-games. Live since 2022, currently used by about 200 weekly users during visits from educational and other institutions.",
		},
		highlights: [
			{
				es: "En producción desde 2022, ~200 usuarios por semana con público real",
				en: "In production since 2022, ~200 weekly users with real audiences",
			},
			{
				es: "Control del robot en tiempo real mediante comandos HTTP",
				en: "Real-time robot control via HTTP commands",
			},
			{
				es: "Aplicación interactiva para control manual + minijuegos web complementarios",
				en: "Interactive app for manual control plus complementary web mini-games",
			},
			{
				es: "Integración directa con firmware Arduino",
				en: "Direct integration with Arduino firmware",
			},
		],
		tech: ["Python", "Arduino", "REST API", "JavaScript", "IoT"],
	},
];
