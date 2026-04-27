export type Lang = "es" | "en";

export type Bilingual = { es: string; en: string };

export type Translations = {
	nav: {
		about: string;
		experience: string;
		technologies: string;
		projects: string;
		contact: string;
	};
	hero: {
		greeting: string;
		ctaProjects: string;
		ctaContact: string;
		ctaCV: string;
		availability: string;
	};
	about: {
		title: string;
		p1: string;
		p2: string;
		p3: string;
		p4: string;
	};
	experience: {
		title: string;
		subtitle: string;
	};
	technologies: {
		title: string;
		subtitle: string;
	};
	projects: {
		title: string;
		subtitle: string;
		completed: string;
		inProgress: string;
	};
	contact: {
		title: string;
		subtitle: string;
		description: string;
	};
	footer: string;
};
