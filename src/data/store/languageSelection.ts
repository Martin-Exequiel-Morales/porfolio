import { create } from "zustand";
import type { LanguageType } from "../types";


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
