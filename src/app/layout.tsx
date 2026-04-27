import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://martin-morales-portfolio.vercel.app"),
	alternates: {
		canonical: "/",
	},
	title: "Martín Morales · Full Stack Developer",
	description:
		"Full Stack Developer con +4 años construyendo software real en producción (Next.js, React, TypeScript, PHP). Disponible para trabajo remoto.",
	openGraph: {
		type: "website",
		title: "Martín Morales · Full Stack Developer",
		description:
			"Full Stack Developer con +4 años en producción. Next.js, React, TypeScript. Disponible para trabajo remoto.",
	},
	twitter: {
		card: "summary_large_image",
		title: "Martín Morales · Full Stack Developer",
		description:
			"Full Stack Developer disponible para trabajo remoto. Next.js, React, TypeScript.",
	},
};

/*
 * Pre-hydration scripts.
 *
 * Runs before React hydrates so the first paint already reflects the user's
 * preferences — no flash of dark theme on light, no flash of Spanish on a
 * Brazilian visitor, no `<html lang>` mismatch with the actual content.
 *
 * Both scripts are wrapped in try/catch because a few exotic browsers throw
 * on `localStorage` access (private mode, blocked storage, etc.); we'd
 * rather show the default than crash the page.
 */
const themeBootstrap = `try{
	var t=localStorage.getItem('theme');
	var prefersLight=matchMedia('(prefers-color-scheme: light)').matches;
	var theme=t==='light'||t==='dark'?t:(prefersLight?'light':'dark');
	if(theme==='light')document.documentElement.classList.add('light');
	else document.documentElement.classList.remove('light');
}catch(e){}`;

const langBootstrap = `try{
	var l=localStorage.getItem('lang');
	if(l!=='es'&&l!=='en'){
		var nav=(navigator.language||'').toLowerCase();
		l=nav.indexOf('es')===0?'es':'en';
	}
	document.documentElement.lang=l;
	document.documentElement.setAttribute('data-lang',l);
}catch(e){}`;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="es"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
			suppressHydrationWarning
		>
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
				<script dangerouslySetInnerHTML={{ __html: langBootstrap }} />
			</head>
			<body className="min-h-dvh flex flex-col">
				{/*
				 * Skip-link: hidden until focused so keyboard users can jump past
				 * the navbar straight to the main heading. The styles match the
				 * accent button so it's obvious when it appears.
				 */}
				<a
					href="#inicio"
					className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent focus:text-white focus:font-medium focus:text-sm focus:shadow-lg focus:outline-none"
				>
					Saltar al contenido / Skip to content
				</a>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
