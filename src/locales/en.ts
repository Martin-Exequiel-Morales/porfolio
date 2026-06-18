import type { Translations } from "./types";

export const en: Translations = {
	nav: {
		about: "About",
		experience: "Experience",
		technologies: "Technologies",
		projects: "Projects",
		contact: "Contact",
	},
	hero: {
		greeting: "Hi, I'm",
		ctaProjects: "View projects",
		ctaContact: "Get in touch",
		ctaCV: "Download CV",
		availability: "Available for remote work",
	},
	about: {
		title: "About me",
		focusTitle: "What I focus on",
		focus: [
			{
				label: "Less waiting",
				detail: "Background workers, async loads, and architecture that never blocks the user.",
			},
			{
				label: "Better feedback",
				detail: "Clear states while something processes, so users always know what's happening.",
			},
			{
				label: "Fewer errors",
				detail: "Validation, structured migrations, and maintainable code that reduces friction.",
			},
		],
		closing:
			"Looking for remote challenges where I can drive impact on efficiency or flow for the people using the product.",
	},
	experience: {
		title: "Experience",
		subtitle: "Technical impact in production",
	},
	technologies: {
		title: "Technologies",
		subtitle: "Tools I work with",
	},
	projects: {
		title: "Projects",
		subtitle: "Products shipped and in progress",
		completed: "Completed",
		inProgress: "In progress",
	},
	contact: {
		title: "Contact",
		subtitle: "Let's talk",
		description:
			"If you have a proposal, a question, or just want to chat about tech, feel free to reach out through any of these channels.",
	},
	footer: "Built with Next.js",
};
