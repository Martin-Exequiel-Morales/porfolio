import { create } from "zustand";

interface NavDeplyState {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

export const useNavState = create<NavDeplyState>((set) => {
  return{
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen }),
  }
});
