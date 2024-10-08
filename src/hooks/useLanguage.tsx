import { useLanguageState } from "../data/store/languageSelection";
import type { LanguageType } from "../data/types";

export function useLanguage() {
	const language = useLanguageState((state) => state.language);
	const setLanguage = useLanguageState((state) => state.setLanguage);

	const togleLanguage = () => {
		setLanguage(language === "en" ? "es" : "en");
	};

	const setPageLanguage = (language: LanguageType) => {
		setLanguage(language);
	};

	return { language, togleLanguage, setPageLanguage };
}
