"use client";

import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/locales";
import { personal } from "@/data/personal";

export function Footer() {
	const { lang } = useLang();
	const t = translations[lang];

	return (
		<footer className="border-t border-border mt-8">
			<div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
				<p className="text-muted text-xs font-mono">
					{t.footer} · {new Date().getFullYear()}
				</p>
				<div className="flex gap-5">
					<a
						href={personal.github}
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted hover:text-accent transition-colors text-xs font-mono"
					>
						GitHub ↗
					</a>
					<a
						href={personal.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted hover:text-accent transition-colors text-xs font-mono"
					>
						LinkedIn ↗
					</a>
					<a
						href={`mailto:${personal.email}`}
						className="text-muted hover:text-accent transition-colors text-xs font-mono"
					>
						Email ↗
					</a>
				</div>
			</div>
		</footer>
	);
}
