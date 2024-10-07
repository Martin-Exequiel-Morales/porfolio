import { create } from "zustand";

type LanguageType = "en" | "es";

interface LanguageState {
	language: LanguageType;
	setLanguage: (language: LanguageType) => void;
}

export const useLanguageState = create<LanguageState>((set, get) => {
	return {
		language: "en",
		setLanguage: (language) => set({ language }),
	};
});
