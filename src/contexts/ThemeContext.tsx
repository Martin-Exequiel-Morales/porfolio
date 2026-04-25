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

/**
 * Reads the theme picked by the pre-hydration bootstrap script in
 * `app/layout.tsx`. The script writes the resolved theme onto
 * `document.documentElement.classList` *before* React mounts, so the very
 * first client render already matches what the user is seeing.
 */
function getInitialTheme(): Theme {
	if (typeof document === "undefined") return "dark";
	return document.documentElement.classList.contains("light")
		? "light"
		: "dark";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>(getInitialTheme);

	// Single source of truth: state drives the DOM class. Eliminates the
	// possibility of state and `<html class>` drifting apart, which is what
	// happened when the previous version applied the class from both an
	// effect *and* the `toggle` handler.
	useEffect(() => {
		document.documentElement.classList.toggle("light", theme === "light");
	}, [theme]);

	// Follow OS theme changes live, but only when the user hasn't explicitly
	// chosen a theme themselves. As soon as they toggle once, their pick
	// (saved in localStorage) wins and we stop listening.
	useEffect(() => {
		const mql = window.matchMedia("(prefers-color-scheme: light)");
		const onChange = (e: MediaQueryListEvent) => {
			if (localStorage.getItem("theme")) return;
			setTheme(e.matches ? "light" : "dark");
		};
		mql.addEventListener("change", onChange);
		return () => mql.removeEventListener("change", onChange);
	}, []);

	const toggle = () => {
		const next: Theme = theme === "dark" ? "light" : "dark";
		localStorage.setItem("theme", next);
		setTheme(next);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggle }}>
			{children}
		</ThemeContext.Provider>
	);
}

export const useTheme = () => useContext(ThemeContext);
