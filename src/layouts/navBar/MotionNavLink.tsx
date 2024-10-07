import { motion } from "framer-motion";
import type { NavLinkProps } from "../../data/types";
import { mobileNavItemVariant } from "../../data/animationConfig";
import { useNavBar } from "../../hooks/useNavBar";

export function MotionNavLink({ link, children }: NavLinkProps) {
	const { closeNavBar } = useNavBar();

	return (
		<motion.a
			onClick={() => {
				setTimeout(closeNavBar, 600);
			}}
			variants={mobileNavItemVariant}
			className="w-full select-none flex justify-center items-center h-16 border-t active:scale-150 active:text-rich_black-600 dark:active:text-rufous-700  border-rich_black-100 dark:border-rufous hover:text-rich_black-600 dark:hover:text-rufous-600 hover:text-xl hover:transition-all hover:duration-500 hover:border hover:border-x-rich_black-600 dark:hover:border-x-rufous-600"
			href={link}
		>
			{children}
		</motion.a>
	);
}
