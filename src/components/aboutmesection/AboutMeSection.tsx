import { motion } from "framer-motion";
import { leftCard, rigthCard } from "../../data/animationConfig";
import { PersonalCard } from "./PersonalCard";
import { PersonalData } from "./PersonalData";
import { AboutMe } from "./AboutMe";

export function AboutSection() {
	return (
		<section
			id="about-me"
			className="md:pt-16 w-full h-screen min-h-[892px] flex flex-col xl:flex-row 2xl:flex-row justify-evenly items-center"
		>
			<motion.div
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				variants={leftCard}
				className="bg-rich_black-300 w-9/12 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-5/12 2xl:w-5/12 h-2/6 xl:h-4/6 rounded-3xl rounded-l-none shadow-lg shadow-rufous-300 border border-l-0 mr-auto xl:mb-auto xl:mt-6 2xl:mb-auto 2xl:mt-6 flex flex-col justify-evenly items-center"
			>
				<PersonalCard />
				<PersonalData />
			</motion.div>
			<motion.div
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				variants={rigthCard}
				className="bg-rich_black-300 w-9/12 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-5/12 h-1/3 xl:h-4/6 rounded-3xl rounded-r-none shadow-lg shadow-rufous-300 border border-r-0 ml-auto xl:mt-auto xl:mb-6 2xl:mt-auto 2xl:mb-6"
			>
				<AboutMe />
			</motion.div>
		</section>
	);
}
