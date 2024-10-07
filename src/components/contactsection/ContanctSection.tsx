import { motion } from "framer-motion";
import {
	beat,
	contactListItem,
	contactListItemImg,
	contactListItemToolTip,
	contactsList,
	leftIn,
	reverseStandarVariation,
	rightIn,
	rotate,
} from "../../data/animationConfig";
import { LinkedinIcon, MailIcon, WhatsappIcon } from "../Icons";
import { ContactItem } from "./ContacItem";

export function ContactSection() {
	return (
		<section
			id="contact"
			className="pt-16 w-full h-screen min-h-[667px] flex flex-col bg-rich_black-300 justify-evenly items-center"
		>
			<motion.h2
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				variants={reverseStandarVariation}
				className="flex items-center justify-center w-full h-1/6 text-rufous text-[3.7vmax] font-bold"
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
						alt="React Logo"
					></motion.img>
				</motion.div>
				<div className="w-8/12 h-full flex flex-col justify-evenly items-center">
					<motion.p
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						variants={reverseStandarVariation}
						className="md:px-20 2xl:px-32 text-rufous text-[3.2vmax] h-2/6"
					>
						Thank you for seening my porfolio, if you are interested in work
						with me, don't doubt in contacting me...{" "}
					</motion.p>
					<div className="w-full h-3/6 flex justify-start items-start">
						<motion.ul
							initial="hidden"
							whileInView="show"
							viewport={{ once: true }}
							variants={contactsList}
							className="w-full h-1/2 xl:h-full flex items-center justify-evenly border rounded-3xl border-rufous bg-rich_black-100"
						>
							<motion.li
								variants={contactListItem}
								className="w-2/12 h-full text-rufous-600 hover:text-rufous-700 flex flex-col justify-evenly"
							>
								<ContactItem
									tooltip="WhatsApp"
									aref={{
										href: "https://wa.me/+543764691408",
										aria: "WhatsApp Link",
										target: "_blank",
									}}
								>
									<WhatsappIcon />
								</ContactItem>
							</motion.li>
							<motion.li
								variants={contactListItem}
								className="w-2/12 h-full text-rufous-600 hover:text-rufous-700 hover:scale-125 md:scale-125 md:hover:scale-150"
							>
								<ContactItem
									tooltip="LinkedIn"
									aref={{
										href: "https://www.linkedin.com/in/martin-morales-2b8303274/",
										aria: "LinkedIn Link",
										target: "_blank",
									}}
								>
									<LinkedinIcon />
								</ContactItem>
							</motion.li>
							<motion.li
								variants={contactListItem}
								className="w-2/12 h-full text-rufous-600 hover:text-rufous-700"
							>
								<ContactItem
									tooltip="Mail"
									aref={{
										href: "mailto:martin.exequiel-morales@gmail.com?Subject=contact%web%developer",
										aria: "Mail Link",
										target: "_blank",
									}}
								>
									<MailIcon />
								</ContactItem>
							</motion.li>
						</motion.ul>
					</div>
				</div>
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
						alt="Astro Logo"
					></motion.img>
				</motion.div>
			</motion.div>
		</section>
	);
}
