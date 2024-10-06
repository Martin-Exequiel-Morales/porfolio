import { motion } from "framer-motion";
import { reverseStandarVariation } from "../../data/animationConfig";


export function AboutMe() {
	return (
		<motion.article
			variants={reverseStandarVariation}
			className="text-rufous flex flex-col"
		>
			<h2 className="font-bold text-center pt-4 sm:pt-6 xl:pt-8 2xl:pt-8 text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl 2xl:text-6xl ">
				ABOUT ME
			</h2>
			<p className="text-lg sm:text-2xl xl:text-4xl 2xl:text-5xl p-6 sm:p-8 md:pt-0 xl:p-14 2xl:p-10 2xl:pt-4 2xl:pr-8 text-rufous-700">
				I am a passionate web developer that enjoys creating custom and
				efficient solutions using different technologies. I love learning new
				technologies and applying them to real-world projects.
			</p>
		</motion.article>
	);
}
