import { CloseIcon, MenuIcon } from "../../components/Icons";
import { AnimatePresence } from "framer-motion";
import { ListNavLinks } from "./ListOfNavLinks";
import { ContainerMotionNavLinks } from "./ContainerMotionNavLink";
import { useNavBar } from "../../hooks/useNavBar";

export function NavBar() {
	const { isOpen, togleNavBar } = useNavBar();
	return (
		<>
			<nav className="w-2/3 flex justify-end">
				<div className="hidden w-full md:flex justify-evenly">
					<ListNavLinks />
				</div>
				<div className="md:hidden mr-6 active:text-rufous-600 active:scale-150">
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
