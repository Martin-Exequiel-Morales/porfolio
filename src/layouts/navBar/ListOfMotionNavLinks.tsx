import { LANGUAGE } from "../../data/consts";
import { useLanguage } from "../../hooks/useLanguage";
import { MotionNavLink } from "./MotionNavLink";

export function ListMotionNavLinks() {
	const { language } = useLanguage();
	return (
		<>
			<MotionNavLink link="#about-me">
				{LANGUAGE[language].sections.about.title}
			</MotionNavLink>
			<MotionNavLink link="#tech">
				{LANGUAGE[language].sections.technologies.title}
			</MotionNavLink>
			<MotionNavLink link="#experience">
				{LANGUAGE[language].sections.experience.title}
			</MotionNavLink>
			<MotionNavLink link="#contact">
				{LANGUAGE[language].sections.contact.title}
			</MotionNavLink>
		</>
	);
}
