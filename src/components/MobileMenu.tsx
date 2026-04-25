"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { SectionId } from "@/lib/sections";

type Link = { id: SectionId; label: string; href: string };

type MobileMenuProps = {
	open: boolean;
	links: Link[];
	activeId: SectionId;
	onClose: () => void;
	/** Element to return focus to when the menu closes (the burger button). */
	returnFocusRef: React.RefObject<HTMLButtonElement | null>;
};

/**
 * Slide-down mobile navigation menu.
 *
 * Accessibility:
 * - `Escape` closes the menu.
 * - On open, focus moves to the first link so keyboard users land inside
 *   the menu instead of having to Tab through the controls again.
 * - On close, focus returns to the toggling burger button (passed via
 *   `returnFocusRef`).
 */
export function MobileMenu({
	open,
	links,
	activeId,
	onClose,
	returnFocusRef,
}: MobileMenuProps) {
	const firstLinkRef = useRef<HTMLAnchorElement>(null);
	const wasOpen = useRef(false);

	useEffect(() => {
		if (!open) {
			// On the open->close transition, restore focus to the trigger.
			if (wasOpen.current) returnFocusRef.current?.focus();
			wasOpen.current = false;
			return;
		}
		wasOpen.current = true;
		// Defer until the menu is mounted and the AnimatePresence enter
		// animation has the element in the DOM.
		const t = window.setTimeout(() => firstLinkRef.current?.focus(), 0);
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				e.preventDefault();
				onClose();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => {
			window.clearTimeout(t);
			window.removeEventListener("keydown", onKey);
		};
	}, [open, onClose, returnFocusRef]);

	return (
		<AnimatePresence>
			{open ? (
				<motion.div
					id="mobile-menu"
					role="dialog"
					aria-modal="true"
					aria-label="Navegación principal"
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: "auto" }}
					exit={{ opacity: 0, height: 0 }}
					className="sm:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
				>
					<ul className="px-6 py-4 space-y-4">
						{links.map((link, i) => {
							const isActive = activeId === link.id;
							return (
								<li key={link.href}>
									<a
										ref={i === 0 ? firstLinkRef : undefined}
										href={link.href}
										className={`text-sm transition-colors block ${
											isActive
												? "text-accent"
												: "text-muted hover:text-foreground"
										}`}
										onClick={onClose}
									>
										{link.label}
									</a>
								</li>
							);
						})}
					</ul>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
}
