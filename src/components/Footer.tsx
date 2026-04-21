"use client";

import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

export function Footer() {
	const { lang } = useLang();
	const t = translations[lang];

	return (
		<footer className="text-center py-8 text-muted text-xs font-mono border-t border-border">
			{t.footer} · {new Date().getFullYear()}
		</footer>
	);
}
