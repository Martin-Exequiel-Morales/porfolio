import { LinkedinIcon, MailIcon, WhatsappIcon } from "../../components/Icons";
import { LANGUAGE } from "../../data/consts";
import { useLanguage } from "../../hooks/useLanguage";

export function FooterReact() {
	const { language } = useLanguage();
	return (
		<>
			<div className="w-2/4 ml-2 md:text-2xl text-center">
				{LANGUAGE[language].footer.madeBy}{" "}
				<a
					className="text-rich_black-600 hover:text-rich_black-700 dark:text-rufous-600 dark:hover:text-rufous-700"
					target="_blank"
					href="https://www.linkedin.com/in/martin-morales-2b8303274/"
				>
					Martin Morales
				</a>
			</div>
			<div className="w-2/4">
				<ul className="w-full flex items-center justify-evenly">
					<li className="size-8 text-rich_black-600 hover:text-rich_black-700 dark:text-rufous-600 dark:hover:text-rufous-700 hover:scale-125 md:scale-125 md:hover:scale-150">
						<a
							href="https://wa.me/+543764691408"
							aria-label={LANGUAGE[language].footer.whatsappAlt}
							target="_blank"
						>
							<WhatsappIcon />
						</a>
					</li>
					<li className="size-8 text-rich_black-600 hover:text-rich_black-700 dark:text-rufous-600 dark:hover:text-rufous-700 hover:scale-125 md:scale-125 md:hover:scale-150">
						<a
							href="https://www.linkedin.com/in/martin-morales-2b8303274/"
							aria-label={LANGUAGE[language].footer.linkedinAlt}
							target="_blank"
						>
							<LinkedinIcon />
						</a>
					</li>
					<li className="size-8 text-rich_black-600 hover:text-rich_black-700 dark:text-rufous-600 dark:hover:text-rufous-700 hover:scale-125 md:scale-125 md:hover:scale-150">
						<a
							href="mailto:martin.exequiel-morales@gmail.com?Subject=contact%web%developer"
							aria-label={LANGUAGE[language].footer.mailAlt}
							target="_blank"
						>
							<MailIcon />
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}
