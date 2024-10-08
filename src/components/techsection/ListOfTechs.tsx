import { motion } from "framer-motion";
import { useActiveTech } from "../../data/store/techImage";
import type { ActiveTech, Tech } from "../../data/types";
import {
	techListItemVariant,
	techListVariant,
} from "../../data/animationConfig";
import { useDarkMode } from "../../hooks/useDarkMode";

export function ListOfTechs({ techs }: { techs: Tech[] }) {
	const setActiveTech = useActiveTech((state) => state.setActiveTech);
	const { darkModeState } = useDarkMode();

	const handleTech = (tech: ActiveTech) => {
		setActiveTech(tech);
	};

	return (
		<motion.div
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			variants={techListVariant}
			className="h-full max-h-16 md:max-h-none w-full md:w-3/12 flex md:flex-col items-center justify-evenly"
		>
			{techs.map((tech) => {
				return (
					<motion.div
						variants={techListItemVariant}
						onMouseEnter={() => {
							handleTech(tech);
						}}
						onClick={() => {
							handleTech(tech);
						}}
						className="select-none md:even:ml-auto md:even:mr-20 md:odd:mr-auto md:odd:ml-20  border border-rich_black-100 dark:border-rufous hover:scale-125 hover:bg-rich_black-800 dark:hover:bg-rufous-700 active:bg-rich_black-800 dark:active:bg-rufous-700 p-1 md:p-2 lg:p-4"
						key={tech.name}
					>
						<img
							className="w-6 h-6 md:w-8 md:h-8"
							src={darkModeState === "dark" ? tech.iconDark : tech.icon}
							alt={tech.name}
							loading="lazy"
						/>
					</motion.div>
				);
			})}
		</motion.div>
	);
}
