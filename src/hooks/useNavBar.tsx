import { useNavState } from "../data/store/navBar";

export function useNavBar() {
	const isOpen = useNavState((state) => state.isOpen);
	const setIsOpen = useNavState((state) => state.setIsOpen);

	const togleNavBar = () => {
		setIsOpen(!isOpen);
	};

	const closeNavBar = () => {
		setIsOpen(false);
	};

	return { isOpen, closeNavBar, togleNavBar };
}
