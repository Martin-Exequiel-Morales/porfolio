import { motion } from "framer-motion";
import { standarVariation } from "../../data/animationConfig";
import { LANGUAGE } from "../../data/consts";
import { useLanguage } from "../../hooks/useLanguage";

export function PersonalCard() {
	const {language} = useLanguage();

	return (
		<motion.article
			variants={standarVariation}
			className="flex items-center text-base justify-between text-rich_black-100 dark:text-rufous"
		>
			<header className="flex items-center gap-3 xl:gap-4 2xl:gap-8">
				<img
					className="w-[10vmax] h-[10vmax] md:w-[8vmax] md:h-[8vmax] rounded-full"
					alt="Martin Morales"
					src="/personal_photo.webp"
				/>
				<div className="flex flex-col  text-[1.9vmax] sm:text-[2.5vmax] md:text-[2.2vmax] leading-[2vmax]">
					<strong>Martin Exequiel Morales</strong>
					<span className="text-rich_black-600 dark:text-rufous-700">{LANGUAGE[language].sections.about.personalCard.title}</span>
				</div>
			</header>
		</motion.article>
	);
}
