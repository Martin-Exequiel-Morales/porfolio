"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Lang } from "@/locales/types";

type LanguageContextType = {
	lang: Lang;
	toggle: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
	lang: "es",
	toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [lang, setLang] = useState<Lang>("es");

	useEffect(() => {
		const saved = localStorage.getItem("lang");
		if (saved === "es" || saved === "en") {
			setLang(saved);
			return;
		}
		// Auto-detect: Spanish for Spanish-speaking locales, English for the rest
		const browserLang = navigator.language ?? "";
		setLang(browserLang.toLowerCase().startsWith("es") ? "es" : "en");
	}, []);

	const toggle = () => {
		const next: Lang = lang === "es" ? "en" : "es";
		setLang(next);
		localStorage.setItem("lang", next);
	};

	return (
		<LanguageContext.Provider value={{ lang, toggle }}>
			{children}
		</LanguageContext.Provider>
	);
}

export const useLang = () => useContext(LanguageContext);
