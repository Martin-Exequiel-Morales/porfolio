import { motion } from "framer-motion";
import { mobileNavItemContainerVariant } from "../../data/animationConfig";
import { ListMotionNavLinks } from "./ListOfMotionNavLinks";

export function ContainerMotionNavLinks() {
	return (
		<motion.div
			className="w-full flex flex-col justify-end md:hidden"
			variants={mobileNavItemContainerVariant}
			initial="closed"
			animate="open"
			exit="exit"
		>
			<ListMotionNavLinks />
		</motion.div>
	);
}
