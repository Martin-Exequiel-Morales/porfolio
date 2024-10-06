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
					className="w-24 sm:w-28 md:w-32 lg:w-32 xl:w-36 2xl:w-48 h-24 sm:h-28 md:h-32 lg:h-32 xl:h-36 2xl:h-48 rounded-full"
					alt="Martin Morales"
					src="/personal_photo.webp"
				/>
				<div className="flex flex-col sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
					<strong>Martin Exequiel Morales</strong>
					<span className="text-rufous-700">Web Developer</span>
				</div>
			</header>
		</motion.article>
	);
}
