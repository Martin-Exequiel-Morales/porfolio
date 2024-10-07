import { create } from "zustand";
import type { ActiveTechState } from "../types";

export const useActiveTech = create<ActiveTechState>((set, get) => {
	return {
		activeTech: {
			name: "PHP",
			seniority: "Semi-Senior",
			icon: "/icons/php.svg",
			iconDark: "/icons/php_dark.svg",
			animation: "beat",
		},
		setActiveTech: (activeTechProp) => {
			const { activeTech } = get();
			if (activeTechProp !== activeTech) {
				set({ activeTech: activeTechProp });
			}
		},
	};
});
