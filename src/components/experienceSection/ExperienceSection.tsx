import { reverseStandarVariation } from "../../data/animationConfig";
import { TimelineCard } from "./timeline/TimelineCard";
import { TimelineContainer } from "./timeline/TimelineContainer";
import { motion } from "framer-motion";
import { TimelineItem } from "./timeline/TimelineItem";
import { useLanguage } from "../../hooks/useLanguage";
import { LANGUAGE } from "../../data/consts";

export function ExperienceSection() {
	const { language } = useLanguage();
	return (
		<section
			id="experience"
			className="pt-16 w-full h-screen min-h-[667px] flex flex-col justify-evenly items-center"
		>
			<motion.h2
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				variants={reverseStandarVariation}
				className="flex items-center justify-center w-full h-1/6 text-rich_black-100 dark:text-rufous text-[3.7vmax] font-bold"
			>
				{LANGUAGE[language].sections.experience.title}
			</motion.h2>
			<div className=" flex w-10/12 items-center justify-center h-5/6">
				<TimelineContainer>
					<TimelineItem>
						<TimelineCard
							title={
								LANGUAGE[language].sections.experience.listItems[0].position
							}
							date={
								LANGUAGE[language].sections.experience.listItems[0].duration
							}
							place={
								LANGUAGE[language].sections.experience.listItems[0].company
							}
						>
							<ul>
								<li>
									{
										LANGUAGE[language].sections.experience.listItems[0]
											.description
									}
								</li>
								<li>
									{LANGUAGE[language].sections.experience.listItems[0].extra}
								</li>
							</ul>
						</TimelineCard>
					</TimelineItem>
					<TimelineItem>
						<TimelineCard
							title={
								LANGUAGE[language].sections.experience.listItems[1].position
							}
							date={
								LANGUAGE[language].sections.experience.listItems[1].duration
							}
							place={
								LANGUAGE[language].sections.experience.listItems[1].company
							}
						>
							{LANGUAGE[language].sections.experience.listItems[1].description}
						</TimelineCard>
					</TimelineItem>
				</TimelineContainer>
			</div>
		</section>
	);
}
