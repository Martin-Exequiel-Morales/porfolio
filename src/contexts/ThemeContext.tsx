"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

type ThemeContextType = {
	theme: Theme;
	toggle: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
	theme: "dark",
	toggle: () => {},
});

function applyTheme(theme: Theme) {
	if (theme === "light") {
		document.documentElement.classList.add("light");
	} else {
		document.documentElement.classList.remove("light");
	}
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>("dark");

	useEffect(() => {
		const saved = localStorage.getItem("theme") as Theme | null;
		const initial: Theme = saved === "light" ? "light" : "dark";
		setTheme(initial);
		applyTheme(initial);
	}, []);

	const toggle = () => {
		const next: Theme = theme === "dark" ? "light" : "dark";
		setTheme(next);
		localStorage.setItem("theme", next);
		applyTheme(next);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggle }}>
			{children}
		</ThemeContext.Provider>
	);
}

export const useTheme = () => useContext(ThemeContext);
