import { motion } from "framer-motion";
import { standarVariation } from "../../data/animationConfig";

export function PersonalCard() {
	return (
		<motion.article
			variants={standarVariation}
			className="flex items-center text-base justify-between text-rufous"
		>
			<header className="flex items-center gap-3 xl:gap-4 2xl:gap-8">
				<img
					className="w-[10vmax] h-[10vmax] md:w-[8vmax] md:h-[8vmax] rounded-full"
					alt="Martin Morales"
					src="/personal_photo.webp"
				/>
				<div className="flex flex-col  text-[1.9vmax] sm:text-[2.5vmax] md:text-[2.2vmax] leading-[2vmax]">
					<strong>Martin Exequiel Morales</strong>
					<span className="text-rufous-700">Web Developer</span>
				</div>
			</header>
		</motion.article>
	);
}
