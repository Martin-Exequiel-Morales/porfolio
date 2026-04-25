/**
 * Single source of truth for the page's section ids. Adding/removing a
 * section is a single-file change here; the navbar, scroll-spy and any
 * deep-link handling all read from this list.
 */
export const SECTION_IDS = [
	"inicio",
	"sobre-mi",
	"experiencia",
	"tecnologias",
	"proyectos",
	"contacto",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

/**
 * Height of the fixed top navbar in pixels — kept in sync with the `h-16`
 * class on the `<nav>` element. Sections use this as `scroll-margin-top`
 * so anchor jumps don't park content under the navbar.
 */
export const NAV_HEIGHT = 64;
