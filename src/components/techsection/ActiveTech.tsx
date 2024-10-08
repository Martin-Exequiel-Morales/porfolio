import { motion } from "framer-motion";
import { useActiveTech } from "../../data/store/techImage";
import {
	beat,
	reverseStandarVariation,
	rotate,
} from "../../data/animationConfig";
import { useDarkMode } from "../../hooks/useDarkMode";
import { useLanguage } from "../../hooks/useLanguage";
import { LANGUAGE } from "../../data/consts";

export function ActiveTech() {
	const { language } = useLanguage();
	const tech = useActiveTech((state) => state.activeTech);
	const { darkModeState } = useDarkMode();
	return (
		<motion.div
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			variants={reverseStandarVariation}
			className="flex flex-col items-center justify-center gap-8 md:gap-0 md:justify-evenly h-5/6 w-full"
		>
			<motion.img
				animate="rotate"
				variants={tech.animation === "beat" ? beat : rotate}
				className="w-8/12 h-3/6 md:h-4/6"
				src={darkModeState === "dark" ? tech.iconDark : tech.icon}
				alt={tech.name}
				loading="lazy"
			/>
			<h3 className="text-rich_black-100 dark:text-rufous text-3xl md:text-5xl">
				<span className="text-rich_black-600 dark:text-rufous-700">{LANGUAGE[language].sections.technologies.activeTech.name}:</span>{" "}
				{tech.name}
			</h3>
			<h3 className="text-rich_black-100 dark:text-rufous text-3xl md:text-5xl">
				<span className="text-rich_black-600 dark:text-rufous-700">
				{LANGUAGE[language].sections.technologies.activeTech.seniority}:
				</span>{" "}
				{tech.seniority}
			</h3>
		</motion.div>
	);
}
