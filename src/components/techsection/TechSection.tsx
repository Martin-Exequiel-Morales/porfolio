import { motion } from "framer-motion";
import { LANGUAGE, TECHS } from "../../data/consts";
import { reverseStandarVariation } from "../../data/animationConfig";
import { ListOfTechs } from "./ListOfTechs";
import { ActiveTech } from "./ActiveTech";
import { useLanguage } from "../../hooks/useLanguage";

export function TechSection() {
	const { language } = useLanguage();
	let halfTechs = [];
	let halfTechs2 = [];
	if (TECHS.length % 2 == 0) {
		halfTechs = TECHS.slice(0, TECHS.length / 2);
		halfTechs2 = TECHS.slice(TECHS.length / 2, TECHS.length);
	} else {
		halfTechs = TECHS.slice(0, Math.ceil(TECHS.length / 2));
		halfTechs2 = TECHS.slice(Math.ceil(TECHS.length / 2), TECHS.length);
	}
	return (
		<section
			id="tech"
			className="pt-16 pb-8 w-full h-screen min-h-[667px] flex flex-col bg-vanilla-600 dark:bg-rich_black-300 justify-evenly items-center"
		>
			<motion.h2
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				variants={reverseStandarVariation}
				className="text-rich_black-100 dark:text-rufous h-1/6 flex items-center justify-center text-[3.7vmax] font-bold"
			>
				{LANGUAGE[language].sections.technologies.title}
			</motion.h2>
			<motion.div className="w-full h-5/6 flex flex-col md:flex-row justify-between md:justify-evenly items-center">
				<ListOfTechs techs={halfTechs} />
				<ActiveTech />
				<ListOfTechs techs={halfTechs2} />
			</motion.div>
		</section>
	);
}
