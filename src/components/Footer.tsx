"use client";

import { useT } from "@/contexts/LanguageContext";
import { socialLinks } from "@/data/personal";

export function Footer() {
	const t = useT();

	return (
		<footer className="border-t border-border mt-8">
			<div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
				<p className="text-muted text-xs font-mono">
					{t.footer} · {new Date().getFullYear()}
				</p>
				<div className="flex gap-5">
					{socialLinks.map((link) => (
						<a
							key={link.id}
							href={link.href}
							{...(link.external
								? { target: "_blank", rel: "noopener noreferrer" }
								: {})}
							className="text-muted hover:text-accent transition-colors text-xs font-mono"
						>
							{link.id === "email" ? "Email ↗" : link.label}
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
