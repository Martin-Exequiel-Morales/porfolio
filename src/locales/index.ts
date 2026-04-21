import { es } from "./es";
import { en } from "./en";

export type { Lang, Bilingual, Translations } from "./types";

export const translations = { es, en } as const;
