import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { ScrollSnap } from "@/components/ScrollSnap";

export default function Home() {
	return (
		<>
			<ScrollSnap />
			<NavBar />
			<main className="flex flex-col items-center">
				<Hero />
				<About />
				<Experience />
				<TechStack />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
