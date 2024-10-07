import { motion } from "framer-motion";
import {
	contactListItemImg,
	contactListItemToolTip,
} from "../../data/animationConfig";

interface Props {
	children: React.ReactNode;
	tooltip: string;
	aref: {
		href: string;
		aria: string;
		target: string;
	};
}

export function ContactItem({ tooltip, children, aref }: Props) {
	return (
		<motion.a
			initial="rest"
			whileHover="hover"
			whileTap="hover"
			animate="rest"
			className="flex flex-col justify-evenly h-full items-center"
			href={aref.href}
			aria-label={aref.aria}
			target={aref.target}
		>
			<motion.div
				variants={contactListItemToolTip}
				className=" select-none flex justify-center items-center text-[2vmax]"
			>
				{tooltip}
			</motion.div>
			<motion.div
				className="w-[6vmax] md:w-[10vmax] flex items-center justify-center"
				variants={contactListItemImg}
			>
				{children}
			</motion.div>
		</motion.a>
	);
}
