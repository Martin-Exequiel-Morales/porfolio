/**
 * Re-exports the i18n type primitives. Lives in `lib/` (general-purpose
 * utilities) instead of `locales/` so the `data/*` modules can describe
 * bilingual content without taking a conceptual dependency on the locale
 * dictionaries themselves.
 */
export type { Lang, Bilingual, Translations } from "@/locales/types";
