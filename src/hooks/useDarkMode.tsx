import { useDarkState } from "../data/store/darkMode";
import type { DarkType } from "../data/types";

export function useDarkMode() {
	const darkModeState = useDarkState((state) => state.darkMode);
	const setDarkState = useDarkState((state) => state.setDarkMode);

	const toggleDarkMode = () => {
		setDarkState(darkModeState === "dark" ? "light" : "dark");
	};

	const setDarkMode = (mode: DarkType) => {
		setDarkState(mode);
	};

	return { darkModeState, toggleDarkMode, setDarkMode };
}
