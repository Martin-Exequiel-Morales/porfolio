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
		title: { es: "Tienda Online SaaS", en: "SaaS Online Store" },
		status: "in-progress",
		description: {
			es: "Nació para ayudar a mi madre con su tienda multimarcas: control de stock, vencimientos y respuestas rápidas a clientes. Evolucionó en una plataforma e-commerce SaaS multi-tenant para pymes argentinas — catálogo, checkout con reserva de stock, envíos por distancia real, pagos locales y panel admin. MVP avanzado production-ready; app Android y chatbot en roadmap.",
			en: "Started to help my mother run her multi-brand store: stock control, expiry tracking, and faster answers for customers. It grew into a multi-tenant e-commerce SaaS for Argentine SMBs — catalog, checkout with stock reservation, distance-based shipping, local payments, and an admin panel. Advanced production-ready MVP; Android app and chatbot on the roadmap.",
		},
		highlights: [
			{
				es: "SaaS multi-tenant: una instalación, múltiples tiendas aisladas con branding y credenciales de pago propias",
				en: "Multi-tenant SaaS: one deployment, isolated stores with their own branding and payment credentials",
			},
			{
				es: "Carrito → checkout con reserva de stock en Redis (10 min) y pagos MercadoPago/Viumi con webhooks idempotentes",
				en: "Cart → checkout with Redis stock reservation (10 min) and MercadoPago/Viumi payments with idempotent webhooks",
			},
			{
				es: "Checkout invitado WhatsApp-first: pedido creado primero, confirmación de contacto antes de despachar",
				en: "WhatsApp-first guest checkout: order created first, contact verified before dispatch",
			},
			{
				es: "Envíos por distancia real (Google Maps), pre-órdenes, motor de cupones/combos y panel admin con RBAC",
				en: "Distance-based shipping (Google Maps), pre-orders, coupon/combo engine, and admin panel with RBAC",
			},
			{
				es: "Monorepo documentado (~370 archivos TS), services + Zod, CI GitHub Actions, tests Jest + E2E Playwright",
				en: "Documented monorepo (~370 TS files), services + Zod, GitHub Actions CI, Jest + Playwright E2E tests",
			},
			{
				es: "Próximo: app admin Android (Expo) para operación móvil y chatbot de atención",
				en: "Next up: Android admin app (Expo) for mobile ops and a customer-facing chatbot",
			},
		],
		tech: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Prisma",
			"PostgreSQL",
			"Redis",
			"Docker",
			"Zod",
			"Jest",
			"Playwright",
		],
	},
	{
		title: { es: "Portal Institucional", en: "Institutional Portal" },
		status: "completed",
		description: {
			es: "Punto de acceso único a los sistemas internos de la Cámara. Un login, permisos por sistema y acceso directo a lo que cada usuario necesita.",
			en: "Single entry point to the Chamber's internal systems. One login, per-system permissions, and direct access to what each user needs.",
		},
		highlights: [
			{
				es: "410+ usuarios activos en producción",
				en: "410+ active users in production",
			},
			{
				es: "Autenticación por DNI, sin credenciales extra",
				en: "DNI-based authentication, no extra credentials",
			},
			{
				es: "Tutoriales integrados que redujeron consultas básicas de soporte",
				en: "Built-in tutorials that cut basic internal support queries",
			},
			{
				es: "Panel con accesos, documentos institucionales y enlaces de utilidad",
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
			es: "Experiencias interactivas para visitas: control de un robot en tiempo real y minijuegos web para público de distintas edades.",
			en: "Interactive experiences for institutional visits: real-time robot control and web mini-games for audiences of all ages.",
		},
		highlights: [
			{
				es: "En producción desde 2022, ~200 usuarios por semana",
				en: "Live since 2022, ~200 weekly users",
			},
			{
				es: "Control del robot vía HTTP + firmware Arduino",
				en: "Robot control via HTTP + Arduino firmware",
			},
			{
				es: "App de control manual y minijuegos web complementarios",
				en: "Manual control app plus complementary web mini-games",
			},
		],
		tech: ["Python", "Arduino", "REST API", "JavaScript", "IoT"],
	},
];
