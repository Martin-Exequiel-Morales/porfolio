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
import { ContactItem } from "./ContacItem";
import { useDarkMode } from "../../hooks/useDarkMode";
import { useLanguage } from "../../hooks/useLanguage";
import { LANGUAGE } from "../../data/consts";

export function ContactSection() {
	const { language } = useLanguage();
	const { darkModeState } = useDarkMode();
	return (
		<section
			id="contact"
			className="pt-16 w-full h-screen min-h-[667px] flex flex-col bg-vanilla-600 dark:bg-rich_black-300 justify-evenly items-center"
		>
			<motion.h2
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				variants={reverseStandarVariation}
				className="flex items-center justify-center w-full h-1/6 text-rich_black-100 dark:text-rufous text-[3.7vmax] font-bold"
			>
				{LANGUAGE[language].sections.contact.title}
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
						src={darkModeState ? "/icons/react_dark.svg" : "/icons/react.svg"}
						loading="lazy"
						alt={LANGUAGE[language].sections.contact.iconsAlts.react}
					></motion.img>
				</motion.div>
				<div className="w-8/12 h-full flex flex-col justify-evenly items-center">
					<motion.p
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						variants={reverseStandarVariation}
						className="md:px-20 2xl:px-32 text-rich_black-100 dark:text-rufous text-[3.2vmax] 2xl:text-[3.1vmax] h-2/6"
					>
						{LANGUAGE[language].sections.contact.parrafo}
					</motion.p>
					<div className="w-full h-3/6 flex justify-start items-start">
						<motion.ul
							initial="hidden"
							whileInView="show"
							viewport={{ once: true }}
							variants={contactsList}
							className="overflow-hidden w-full h-1/2 xl:h-full flex items-center justify-evenly border rounded-3xl border-rich_black-600 dark:border-rufous bg-vanilla-700 dark:bg-rich_black-100"
						>
							<motion.li
								variants={contactListItem}
								className="w-2/12 h-full text-rich_black-600 dark:text-rufous-600 hover:text-rich_black-700 dark:hover:text-rufous-700 flex flex-col justify-evenly"
							>
								<ContactItem
									tooltip={
										LANGUAGE[language].sections.contact.iconsLabels.whatsapp
									}
									aref={{
										href: "https://wa.me/+543764691408",
										aria: LANGUAGE[language].sections.contact.iconsAlts
											.whatsapp,
										target: "_blank",
									}}
								>
									<WhatsappIcon />
								</ContactItem>
							</motion.li>
							<motion.li
								variants={contactListItem}
								className="w-2/12 h-full text-rich_black-600 dark:text-rufous-600 hover:text-rich_black-700 dark:hover:text-rufous-700"
							>
								<ContactItem
									tooltip={
										LANGUAGE[language].sections.contact.iconsLabels.linkedin
									}
									aref={{
										href: "https://www.linkedin.com/in/martin-morales-2b8303274/",
										aria: LANGUAGE[language].sections.contact.iconsAlts
											.linkedin,
										target: "_blank",
									}}
								>
									<LinkedinIcon />
								</ContactItem>
							</motion.li>
							<motion.li
								variants={contactListItem}
								className="w-2/12 h-full text-rich_black-600 dark:text-rufous-600 hover:text-rich_black-700 dark:hover:text-rufous-700"
							>
								<ContactItem
									tooltip={LANGUAGE[language].sections.contact.iconsLabels.mail}
									aref={{
										href: "mailto:martin.exequiel-morales@gmail.com?Subject=contact%web%developer",
										aria: LANGUAGE[language].sections.contact.iconsAlts.mail,
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
						src={darkModeState ? "/icons/astro_dark.svg" : "/icons/astro.svg"}
						loading="lazy"
						alt={LANGUAGE[language].sections.contact.iconsAlts.astro}
					></motion.img>
				</motion.div>
			</motion.div>
		</section>
	);
}
