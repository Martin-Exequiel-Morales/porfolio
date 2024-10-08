import { useEffect } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { useLanguage } from "../hooks/useLanguage";

export function Initializer() {
	const { darkModeState, setDarkMode } = useDarkMode();
	const { language, setPageLanguage } = useLanguage();
	useEffect(() => {
		if (
			localStorage.memtheme === "dark" ||
			(!("memtheme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			setDarkMode("dark");
		} else {
			setDarkMode("light");
		}

		if (localStorage.memlang === "en" || !("memlang" in localStorage)) {
			setPageLanguage("en");
		} else {
			setPageLanguage("es");
		}

		document.getElementById("load")?.classList.add("hidden");
		document.getElementById("content")?.classList.remove("hidden");
	}, []);

	useEffect(() => {
		if (darkModeState === "dark") {
			localStorage.setItem("memtheme", "dark");
			document.documentElement.classList.add("dark");
		} else {
			localStorage.setItem("memtheme", "light");
			document.documentElement.classList.remove("dark");
		}
	}, [darkModeState]);

	useEffect(() => {
		if (language === "en") {
			localStorage.setItem("memlang", "en");
		} else {
			localStorage.setItem("memlang", "es");
		}
	}, [language]);
}
