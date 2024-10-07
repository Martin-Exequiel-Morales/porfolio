import { LANGUAGE } from "../../data/consts";
import { useLanguage } from "../../hooks/useLanguage";
import { NavLink } from "./NavLink";

export function ListNavLinks() {
	const { language } = useLanguage();

	return (
		<>
			<NavLink link="#about-me">
				{LANGUAGE[language].sections.about.title}
			</NavLink>
			<NavLink link="#tech">
				{LANGUAGE[language].sections.technologies.title}
			</NavLink>
			<NavLink link="#experience">
				{LANGUAGE[language].sections.experience.title}
			</NavLink>
			<NavLink link="#contact">
				{LANGUAGE[language].sections.contact.title}
			</NavLink>
		</>
	);
}
