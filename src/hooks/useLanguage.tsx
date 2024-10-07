import { useLanguageState } from "../data/store/languageSelection";

export function useLanguage() {
	const language = useLanguageState((state) => state.language);
	const setLanguage = useLanguageState((state) => state.setLanguage);

	const togleLanguage = () => {
		setLanguage(language === "en" ? "es" : "en");
	};

	return { language, togleLanguage };
}
