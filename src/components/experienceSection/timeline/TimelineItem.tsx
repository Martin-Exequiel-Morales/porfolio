import { motion } from "framer-motion";
import { experienceFadeInNoDelay } from "../../../data/animationConfig";

export function TimelineItem({ children }: { children: React.ReactNode }) {
	return (
		<motion.div
			variants={experienceFadeInNoDelay}
			className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
		>
			<div className="flex items-center justify-center w-12 h-12 rounded-full border border-rich_black-100 dark:border-rufous bg-vanilla-700 dark:bg-rich_black-100 text-rich_black-100 dark:text-rufous shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/3 md:group-even:translate-x-1/3">
				<svg
					className="fill-current"
					xmlns="http://www.w3.org/2000/svg"
					width="12"
					height="10"
				>
					<path
						fill="currentColor"
						fillRule="nonzero"
						d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
					/>
				</svg>
			</div>
			{children}
		</motion.div>
	);
}
