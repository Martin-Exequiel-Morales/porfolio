import type { NavLinkProps } from "../../data/types";

export function NavLink({ link, children }: NavLinkProps) {
	return (
		<a
			className="select-none flex h-16 w-full justify-center rounded-xl items-center m-auto text-lg hover:text-xl lg:text-2xl lg:hover:text-3xl hover:text-rufous-600"
			href={link}
		>
			{children}
		</a>
	);
}