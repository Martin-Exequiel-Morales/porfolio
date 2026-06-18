import type { Translations } from "./types";

export const es: Translations = {
	nav: {
		about: "Sobre mí",
		experience: "Experiencia",
		technologies: "Tecnologías",
		projects: "Proyectos",
		contact: "Contacto",
	},
	hero: {
		greeting: "Hola, soy",
		ctaProjects: "Ver proyectos",
		ctaContact: "Contactame",
		ctaCV: "Descargar CV",
		availability: "Disponible para trabajo remoto",
	},
	about: {
		title: "Sobre mí",
		focusTitle: "En lo que me enfoco",
		focus: [
			{
				label: "Menos espera",
				detail: "Procesos en segundo plano, cargas async y arquitectura que no bloquea al usuario.",
			},
			{
				label: "Mejor feedback",
				detail: "Estados claros mientras algo se procesa, para que sepa qué pasa en cada paso.",
			},
			{
				label: "Menos errores",
				detail: "Validaciones, migraciones ordenadas y código mantenible que reduce fricción.",
			},
		],
		closing:
			"Busco desafíos remotos donde pueda generar impacto en eficiencia o fluidez para quienes usan el producto.",
	},
	experience: {
		title: "Experiencia",
		subtitle: "Impacto técnico en producción",
	},
	technologies: {
		title: "Tecnologías",
		subtitle: "Herramientas con las que trabajo",
	},
	projects: {
		title: "Proyectos",
		subtitle: "Productos en producción y en desarrollo",
		completed: "Completado",
		inProgress: "En desarrollo",
	},
	contact: {
		title: "Contacto",
		subtitle: "¿Hablamos?",
		description:
			"Si tenés alguna propuesta, consulta o simplemente querés charlar sobre tecnología, podés escribirme por cualquiera de estos medios.",
	},
	footer: "Hecho con Next.js",
};
