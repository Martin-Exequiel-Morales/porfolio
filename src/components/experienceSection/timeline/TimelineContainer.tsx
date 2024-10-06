import { motion } from "framer-motion";
import { experienceFadeIn } from "../../../data/animationConfig";

export function TimelineContainer({ children }: { children: React.ReactNode }) {
	return (
		<motion.div
			initial="hidden"
			whileInView="show"
			variants={experienceFadeIn}
			viewport={{ once: true }}
			className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-rich_black-100"
		>
			{children}
		</motion.div>
	);
}
