import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { NotFoundContent } from "@/components/NotFoundContent";

export default function NotFound() {
	return (
		<>
			<NavBar />
			<main className="flex-1 flex items-center justify-center px-6">
				<NotFoundContent />
			</main>
			<Footer />
			{/*
			 * Hidden anchor used as the skip-link target on the 404 page so the
			 * shared layout's "Saltar al contenido / Skip to content" still
			 * lands on something meaningful here.
			 */}
			<Link href="/" id="inicio" className="sr-only">
				Inicio / Home
			</Link>
		</>
	);
}
