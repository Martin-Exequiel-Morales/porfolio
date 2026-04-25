"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "@/locales";
import type { Lang, Translations } from "@/lib/i18n";

type LanguageContextType = {
	lang: Lang;
	toggle: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
	lang: "es",
	toggle: () => {},
});

/**
 * Reads the language picked by the pre-hydration bootstrap script in
 * `app/layout.tsx`. The script writes the resolved language (from
 * `localStorage.lang`, with `navigator.language` as fallback) onto
 * `<html data-lang="...">` *before* React mounts, so the very first client
 * render already matches the user's preference.
 *
 * Falls back to `"es"` on the server (no `document`) and on any value the
 * script may have produced outside the supported set.
 */
function getInitialLang(): Lang {
	if (typeof document === "undefined") return "es";
	const dl = document.documentElement.getAttribute("data-lang");
	return dl === "en" || dl === "es" ? dl : "es";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [lang, setLang] = useState<Lang>(getInitialLang);

	// Keep `<html lang>` and `data-lang` in sync with state. Important for
	// screen readers, SEO crawlers, and the bootstrap script's next read.
	useEffect(() => {
		document.documentElement.lang = lang;
		document.documentElement.setAttribute("data-lang", lang);
	}, [lang]);

	const toggle = () => {
		const next: Lang = lang === "es" ? "en" : "es";
		localStorage.setItem("lang", next);
		setLang(next);
	};

	return (
		<LanguageContext.Provider value={{ lang, toggle }}>
			{children}
		</LanguageContext.Provider>
	);
}

export const useLang = () => useContext(LanguageContext);

/**
 * Convenience hook — returns the active translation table for the current
 * language. Saves callers from the `const { lang } = useLang(); const t =
 * translations[lang]` boilerplate.
 */
export function useT(): Translations {
	const { lang } = useLang();
	return translations[lang];
}
