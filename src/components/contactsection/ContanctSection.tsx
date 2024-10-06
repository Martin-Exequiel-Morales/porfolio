import { motion } from "framer-motion";
import {
	beat,
	contactListItem,
	contactsList,
	leftIn,
	reverseStandarVariation,
	rightIn,
	rotate,
} from "../../data/animationConfig";
import { LinkedinIcon, MailIcon, WhatsappIcon } from "../Icons";

export function ContactSection() {
	return (
		<section
			id="contact"
			className="md:pt-16 w-full h-screen min-h-[892px] flex flex-col bg-rich_black-300 justify-evenly items-center"
		>
			<motion.h2
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				variants={reverseStandarVariation}
				className="flex items-center justify-center w-full h-1/6 text-rufous text-3xl md:text-7xl font-bold"
			>
				Contact
			</motion.h2>
			<motion.div className="flex justify-between items-center h-5/6">
				<motion.div
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					variants={leftIn}
					className="w-2/12 h-full flex items-center justify-center"
				>
					<motion.img
						initial="initial"
						animate="rotate"
						variants={rotate}
						src="/icons/react_dark.svg"
						loading="lazy"
					></motion.img>
				</motion.div>
				<motion.div className="w-8/12 h-full flex flex-col justify-evenly items-center">
					<motion.p
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						variants={reverseStandarVariation}
						className="px-20 text-rufous text-5xl h-1/6"
					>
						Thank you for seening my porfolio, if you are interested in work
						with me, don't doubt in contacting me...{" "}
					</motion.p>
					<motion.ul
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						variants={contactsList}
						className="w-full flex items-center justify-evenly h-3/6"
					>
						<motion.li
							variants={contactListItem}
							className="w-2/12 text-rufous-600 hover:text-rufous-700 hover:scale-125 md:scale-125 md:hover:scale-150"
						>
							<a
								href="https://wa.me/+543764691408"
								aria-label="Whatsapp link"
								target="_blank"
							>
								<WhatsappIcon />
							</a>
						</motion.li>
						<motion.li
							variants={contactListItem}
							className="w-2/12 text-rufous-600 hover:text-rufous-700 hover:scale-125 md:scale-125 md:hover:scale-150"
						>
							<a
								href="https://www.linkedin.com/in/martin-morales-2b8303274/"
								aria-label="Linkedin Link"
								target="_blank"
							>
								<LinkedinIcon />
							</a>
						</motion.li>
						<motion.li
							variants={contactListItem}
							className="w-2/12 text-rufous-600 hover:text-rufous-700 hover:scale-125 md:scale-125 md:hover:scale-150"
						>
							<a
								href="mailto:martin.exequiel-morales@gmail.com?Subject=contact%web%developer"
								aria-label="Mail Link"
								target="_blank"
							>
								<MailIcon />
							</a>
						</motion.li>
					</motion.ul>
				</motion.div>
				<motion.div
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					variants={rightIn}
					className="w-2/12 h-full flex items-center justify-center"
				>
					<motion.img
						animate="rotate"
						variants={beat}
						src="/icons/astro_dark.svg"
						loading="lazy"
					></motion.img>
				</motion.div>
			</motion.div>
		</section>
	);
}
