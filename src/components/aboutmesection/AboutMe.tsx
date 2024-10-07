import { motion } from "framer-motion";
import { reverseStandarVariation } from "../../data/animationConfig";
import { useLanguage } from "../../hooks/useLanguage";
import { LANGUAGE } from "../../data/consts";

export function AboutMe() {
	const { language } = useLanguage();
	return (
		<motion.article
			variants={reverseStandarVariation}
			className="text-rich_black-100 dark:text-rufous flex flex-col"
		>
			<h2 className="font-bold text-center pt-[2vmax] text-[3vmax] ">
				{LANGUAGE[language].sections.about.textCard.title}
			</h2>
			<p className="text-[2vmax] sm:text-[2.4vmax] md:text-[2.1vmax] lg:text-[2vmax] xl:text-[2.5vmax] 2xl:text-[2.2vmax] p-[1.5vmax] text-rich_black-600 dark:text-rufous-700">
				{LANGUAGE[language].sections.about.textCard.content}
			</p>
		</motion.article>
	);
}
