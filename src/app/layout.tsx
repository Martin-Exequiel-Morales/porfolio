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
	title: "Martin Morales · Full Stack Developer",
	description:
		"Portfolio de Martin Exequiel Morales, Analista de Sistemas y Full Stack Developer con experiencia en PHP y ecosistema JS moderno (Next.js, React, TypeScript).",
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
