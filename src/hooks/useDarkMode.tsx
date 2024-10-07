import { useDarkState } from "../data/store/darkMode";

export function useDarkMode() {
	const darkModeState = useDarkState((state) => state.darkMode);
	const setDarkState = useDarkState((state) => state.setDarkMode);

	const toggleDarkMode = () => {
		document.documentElement.classList.toggle("dark");
		setDarkState(!darkModeState);
	};

	return { darkModeState, toggleDarkMode };
}
