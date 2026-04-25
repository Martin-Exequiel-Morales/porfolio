/**
 * Three-line "hamburger" that morphs into an X when `open` is true.
 * Pure CSS transform animation — no framer-motion to keep the navbar
 * lightweight.
 */
export function BurgerIcon({ open }: { open: boolean }) {
	return (
		<div className="w-5 h-4 flex flex-col justify-between" aria-hidden="true">
			<span
				className={`block h-px bg-current transition-transform origin-center ${
					open ? "translate-y-[7.5px] rotate-45" : ""
				}`}
			/>
			<span
				className={`block h-px bg-current transition-opacity ${
					open ? "opacity-0" : ""
				}`}
			/>
			<span
				className={`block h-px bg-current transition-transform origin-center ${
					open ? "translate-y-[-7.5px] -rotate-45" : ""
				}`}
			/>
		</div>
	);
}
