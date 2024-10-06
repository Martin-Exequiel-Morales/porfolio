import { motion } from "framer-motion";
import { getAge } from "../../services/getAge";
import { standarVariation } from "../../data/animationConfig";

export function PersonalData() {
	return (
		<motion.div
			variants={standarVariation}
			className="text-rufous sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl"
		>
			<ul>
				<li>
					<span className="text-rufous-700">Age:</span> {getAge("2000-07-27")}
				</li>
				<li>
					<span className="text-rufous-700">Nationality:</span> Argetinian
				</li>
				<li>
					<span className="text-rufous-700">Languages:</span> Spanish, English
				</li>
				<li>
					<span className="text-rufous-700">Contact:</span>{" "}
					<a
						className="hover:text-rufous-800 active:text-rufous-800"
						href="tel: +543764691408"
					>
						+54 376 - 4691408
					</a>
				</li>
				<li>
					<span className="text-rufous-700">Email:</span>{" "}
					<a
						className="hover:text-rufous-800 active:text-rufous-800"
						href="mailto:martin.exequiel-morales@gmail.com?Subject=contact%web%developer"
						aria-label="Mail Link"
					>
						martin.exequiel.morales@gmail.com
					</a>
				</li>
			</ul>
		</motion.div>
	);
}
