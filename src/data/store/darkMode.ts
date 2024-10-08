import { create } from "zustand";
import type { DarkType } from "../types";


interface DarkModeState {
	darkMode: DarkType;
	setDarkMode: (darkMode: DarkType) => void;
}

export const useDarkState = create<DarkModeState>((set) => {
	return {
		darkMode: "dark",
		setDarkMode: (darkMode) => set({ darkMode }),
	};
});
