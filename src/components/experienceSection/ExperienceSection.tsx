import { reverseStandarVariation } from "../../data/animationConfig";
import { TimelineCard } from "./timeline/TimelineCard";
import { TimelineContainer } from "./timeline/TimelineContainer";
import { motion } from "framer-motion";
import { TimelineItem } from "./timeline/TimelineItem";

export function ExperienceSection() {
	return (
		<section
			id="experience"
			className="md:pt-16 w-full h-screen min-h-[892px] flex flex-col bg-rich_black-400 justify-evenly items-center"
		>
			<motion.h2
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={reverseStandarVariation}
      className="flex items-center justify-center w-full h-1/6 text-rufous text-3xl md:text-7xl font-bold">
				Experience
			</motion.h2>
			<div 
      className=" flex w-10/12 items-center justify-center h-5/6">
				<TimelineContainer>
					<TimelineItem>
						<TimelineCard
							title="System Analyst"
							date="12/2023 - 01/2024"
							place="Cámara de representanes de la provincia de Misiones"
						>
							<ul>
								<li>
									Maintained and developed information systems based on PHP,
									JavaScript, MySQL and CSS, with some extensions in Python.
								</li>
								<li>
									Deployed PHP and MySQL environments using Docker containers on
									Ubuntu-based operating systems.
								</li>
							</ul>
						</TimelineCard>
					</TimelineItem>
					<TimelineItem>
						<TimelineCard
							title="Web Developer"
							date="01/2024 - Nowadays"
							place="Freelance"
						>
							I am currently expanding my knowledge in the JavaScript ecosystem
							(MongoDB, Express, React, Node.js) and exploring the possibilities
							of AWS to create scalable cloud applications
						</TimelineCard>
					</TimelineItem>
				</TimelineContainer>
			</div>
		</section>
	);
}
