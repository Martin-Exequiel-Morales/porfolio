import { NavLink } from "./NavLink";

export function ListNavLinks() {
	return (
		<>
			<NavLink link="#about-me">About Me</NavLink>
			<NavLink link="#tech">Technologies</NavLink>
			<NavLink link="#experience">Experience</NavLink>
			<NavLink link="#contact">Contact</NavLink>
		</>
	);
}