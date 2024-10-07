import { motion } from "framer-motion";
import { reverseStandarVariation } from "../../data/animationConfig";

export function AboutMe() {
	return (
		<motion.article
			variants={reverseStandarVariation}
			className="text-rufous flex flex-col"
		>
			<h2 className="font-bold text-center pt-[2vmax] text-[3vmax] ">
				ABOUT ME
			</h2>
			<p className="text-[2.2vmax] sm:text-[2.7vmax] md:text-[2.2vmax] lg:text-[2vmax] xl:text-[2.8vmax] 2xl:text-[2.5vmax] p-[1.5vmax] text-rufous-700">
				I am a passionate web developer that enjoys creating custom and
				efficient solutions using different technologies. I love learning new
				technologies and applying them to real-world projects.
			</p>
		</motion.article>
	);
}
