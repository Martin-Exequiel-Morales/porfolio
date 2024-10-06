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
		<motion.div
			initial="rest"
			whileHover="hover"
			animate="rest"
			className="flex flex-col justify-evenly h-1/2 xl:h-4/5"
		>
			<motion.div
				variants={contactListItemToolTip}
				className=" flex justify-center items-center text-2xl xl:text-4xl"
			>
				{tooltip}
			</motion.div>
			<motion.div variants={contactListItemImg}>
				<a href={aref.href} aria-label={aref.aria} target={aref.target}>
					{children}
				</a>
			</motion.div>
		</motion.div>
	);
}
