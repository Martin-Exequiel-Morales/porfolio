import { create } from "zustand";

interface DarkModeState {
	darkMode: boolean;
	setDarkMode: (darkMode: boolean) => void;
}

export const useDarkState = create<DarkModeState>((set) => {
	return {
		darkMode: true,
		setDarkMode: (darkMode) => set({ darkMode }),
	};
});
