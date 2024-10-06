import { motion } from "framer-motion";
import { TECHS } from "../../data/consts";
import { reverseStandarVariation } from "../../data/animationConfig";
import { ListOfTechs } from "./ListOfTechs";
import { ActiveTech } from "./ActiveTech";

export function TechSection() {
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
			className="md:py-16 w-full h-screen min-h-[892px] flex flex-col bg-rich_black-300 justify-evenly items-center"
		>
			<motion.h2
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				variants={reverseStandarVariation}
				className="text-rufous h-1/6 flex items-center justify-center text-3xl md:text-7xl font-bold"
			>
				Technologies
			</motion.h2>
			<motion.div className="w-full h-5/6 flex flex-col md:flex-row justify-between md:justify-evenly items-center">
				<ListOfTechs techs={halfTechs} />
				<ActiveTech />
				<ListOfTechs techs={halfTechs2} />
			</motion.div>
		</section>
	);
}
