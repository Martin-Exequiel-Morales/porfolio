import { delay } from "framer-motion";
import type { BeatType, RotateType } from "./types";

//General Animations

export const standarVariation = {
	hidden: {
		opacity: 0,
		y: "-20%",
	},
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, delay: 0.5 },
	},
};

export const reverseStandarVariation = {
	hidden: {
		opacity: 0,
		y: "+20%",
	},
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, delay: 0.5 },
	},
};

// Navbar Animations

export const mobileNavItemVariant = {
	open: { opacity: 1, y: 0 },
	closed: { opacity: 0, y: "-100%" },
	exit: { opacity: 0, y: "-100%" },
};

export const mobileNavItemContainerVariant = {
	open: { opacity: 1, height: "auto", transition: { staggerChildren: 0.2 } },
	closed: {
		opacity: 0,
		height: 0,
	},
	exit: { opacity: 0, height: 0 },
};

// About me Animations

export const leftCard = {
	hidden: {
		x: "-100%",
		opacity: 0,
	},
	show: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.5 },
	},
};

export const rigthCard = {
	hidden: {
		x: "+100%",
		opacity: 0,
	},
	show: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.5 },
	},
};

// List of Tech Animations

export const techListVariant = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { delay: 0.5, staggerChildren: 0.2, when: "beforeChildren" },
	},
};

export const techListItemVariant = {
	hidden: { opacity: 0, y: "+50%" },
	show: { opacity: 1, y: 0, trasition: { delay: 0.5 } },
};

// Active Tech Animations

export const beat: BeatType = {
	rotate: {
		y: "-10%",
		transition: {
			duration: 1,
			repeat: Infinity,
			repeatType: "reverse",
			ease: "linear",
		},
	},
};

export const rotate: RotateType = {
	rotate: {
		rotate: 360,
		transition: {
			duration: 3,
			repeat: Infinity,
			ease: "linear",
		},
	},
};

// Experience Animations

export const experienceFadeIn = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { delay: 0.5, when: "beforeChildren", staggerChildren: 0.5 },
	},
};

export const experienceFadeInNoDelay = {
	hidden: { opacity: 0, y: "+50%" },
	show: {
		opacity: 1,
		y: 0,
		trasition: { when: "beforeChildren", staggerChildren: 0.5 },
	},
};

// Contact Animation

export const contactsList = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { delay: 0.5, staggerChildren: 0.3, when: "beforeChildren" },
	},
};

export const contactListItem = {
	hidden: { opacity: 0, y: "+50%" },
	show: { opacity: 1, y: 0, trasition: { delay: 0.5 } },
};

export const leftIn = {
	hidden: {
		x: "-100%",
		opacity: 0,
	},
	show: {
		x: 0,
		opacity: 1,
		transition: { delay: 0.5, duration: 1 },
	},
};

export const rightIn = {
	hidden: {
    x: "+100%",
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.5, duration: 1 },
  },
};
