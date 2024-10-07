import {
	CloseIcon,
	LogoIcon,
	MenuIcon,
	MoonIcon,
	SunIcon,
	WorldIcon,
} from "../../components/Icons";
import { AnimatePresence } from "framer-motion";
import { ListNavLinks } from "./ListOfNavLinks";
import { ContainerMotionNavLinks } from "./ContainerMotionNavLink";
import { useNavBar } from "../../hooks/useNavBar";
import { useDarkMode } from "../../hooks/useDarkMode";
import { LANGUAGE } from "../../data/consts";
import { useLanguage } from "../../hooks/useLanguage";

export function NavBar() {
	const { isOpen, togleNavBar } = useNavBar();
	const { darkModeState, toggleDarkMode } = useDarkMode();
	const { language, togleLanguage } = useLanguage();
	return (
		<>
			<div className="w-1/3 flex justify-evenly items-center">
				<a
					href="/"
					aria-label={LANGUAGE[language].header.logoAlt}
					className="ml-2 active:scale-110 active:text-rich_black-600 dark:active:text-rufous-600 hover:scale-110 hover:text-rich_black-600 dark:hover:text-rufous-600"
				>
					<LogoIcon />
				</a>
				<div className="w-full flex justify-center gap-11 items-center">
					<button
						className="w-6 hover:text-rich_black-600 active:text-rich_black-600 dark:hover:text-rufous-600 dark:active:text-rufous-600"
						onClick={toggleDarkMode}
						aria-label={LANGUAGE[language].header.modeAlt}
					>
						{darkModeState ? <MoonIcon /> : <SunIcon />}
					</button>
					<button
						className="w-6 hover:text-rich_black-600 active:text-rich_black-600 dark:hover:text-rufous-600 dark:active:text-rufous-600"
						onClick={togleLanguage}
						aria-label={LANGUAGE[language].header.languageAlt}
					>
						<WorldIcon />
					</button>
				</div>
			</div>
			<nav className="w-2/3 flex justify-end">
				<div className="hidden w-full md:flex justify-evenly">
					<ListNavLinks />
				</div>
				<div className="md:hidden mr-6 active:text-rich_black-600 dark:active:text-rufous-600 active:scale-150">
					<button onClick={togleNavBar}>
						{!isOpen ? <MenuIcon /> : <CloseIcon />}
					</button>
				</div>
			</nav>
			<AnimatePresence mode="wait">
				{isOpen && <ContainerMotionNavLinks />}
			</AnimatePresence>
		</>
	);
}
