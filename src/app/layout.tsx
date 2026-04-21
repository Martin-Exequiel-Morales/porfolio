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
	title: "Martin Morales · Full Stack Developer",
	description:
		"Portfolio de Martin Exequiel Morales, Analista de Sistemas y Full Stack Developer con experiencia en PHP y ecosistema JS moderno (Next.js, React, TypeScript).",
	openGraph: {
		type: "website",
		title: "Martin Morales · Full Stack Developer",
		description:
			"Portfolio de Martin Exequiel Morales, Analista de Sistemas y Full Stack Developer con experiencia en Next.js, React, TypeScript y más.",
		images: [
			{
				url: "/personal_photo.webp",
				width: 400,
				height: 400,
				alt: "Martin Morales",
			},
		],
	},
	twitter: {
		card: "summary",
		title: "Martin Morales · Full Stack Developer",
		description:
			"Portfolio de Martin Exequiel Morales, Analista de Sistemas y Full Stack Developer.",
		images: ["/personal_photo.webp"],
	},
};

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
				{/* Anti-flash: apply saved theme before React hydrates */}
				<script
					dangerouslySetInnerHTML={{
						__html: `try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light');}catch(e){}`,
					}}
				/>
			</head>
			<body className="min-h-full flex flex-col">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
