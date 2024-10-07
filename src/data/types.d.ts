export interface Tech {
	name: string;
	seniority: string;
	animation: string;
	iconDark: string;
	icon: string;
}

export interface ActiveTech {
	name: string;
	seniority: string;
	icon: string;
	iconDark: string;
	animation: string;
}

export interface ActiveTechState {
	activeTech: ActiveTech;
	setActiveTech: (activeTechProp: ActiveTech) => void;
}

export interface TransitionType {
	duration: number;
	repeat: number;
	ease: string;
	repeatType?: "reverse" | "loop" | "mirror" | undefined;
}

export type RotateType = {
	rotate: { rotate: number; transition: TransitionType };
};

export type BeatType = {
	rotate: {
		y: string;
		transition: TransitionType;
	};
};

export interface NavLinkProps {
	link: string;
	children: string;
}
