import { motion } from "framer-motion";
import { getAge } from "../../services/getAge";
import { standarVariation } from "../../data/animationConfig";
import { useLanguage } from "../../hooks/useLanguage";
import { LANGUAGE } from "../../data/consts";

export function PersonalData() {
	const { language } = useLanguage();

	return (
		<motion.div
			variants={standarVariation}
			className="text-rich_black-100 dark:text-rufous text-[1.6vmax] sm:text-[1.9vmax] md:text-[1.8vmax] "
		>
			<ul>
				<li>
					<span className="text-rich_black-600 dark:text-rufous-700">
						{LANGUAGE[language].sections.about.personalCard.labels.age}:
					</span>{" "}
					{getAge("2000-07-27")}
				</li>
				<li>
					<span className="text-rich_black-600 dark:text-rufous-700">
						{LANGUAGE[language].sections.about.personalCard.labels.nationality}:
					</span>{" "}
					{LANGUAGE[language].sections.about.personalCard.values.nacionality}
				</li>
				<li>
					<span className="text-rich_black-600 dark:text-rufous-700">
						{LANGUAGE[language].sections.about.personalCard.labels.languages}:
					</span>{" "}
					{LANGUAGE[language].sections.about.personalCard.values.languages}
				</li>
				<li>
					<span className="text-rich_black-600 dark:text-rufous-700">
						{LANGUAGE[language].sections.about.personalCard.labels.contact}:
					</span>{" "}
					<a
						className="hover:text-rich_black-800 active:text-rich_black-800 dark:hover:text-rufous-800 dark:active:text-rufous-800"
						href="tel: +543764691408"
					>
						{LANGUAGE[language].sections.about.personalCard.values.contact}
					</a>
				</li>
				<li>
					<span className="text-rich_black-600 dark:text-rufous-700">
						{LANGUAGE[language].sections.about.personalCard.labels.email}:
					</span>{" "}
					<a
						className="hover:text-rich_black-800 active:text-rich_black-800 dark:hover:text-rufous-800 dark:active:text-rufous-800"
						href="mailto:martin.exequiel-morales@gmail.com?Subject=contact%web%developer"
						aria-label="Mail Link"
					>
						{LANGUAGE[language].sections.about.personalCard.values.email}
					</a>
				</li>
			</ul>
		</motion.div>
	);
}
