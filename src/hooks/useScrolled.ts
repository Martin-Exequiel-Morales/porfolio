"use client";

import { useEffect, useState } from "react";

/**
 * Boolean flag that flips to `true` once the user has scrolled past
 * `threshold` px from the top of the document, and back to `false` when
 * they return above it. Used by the navbar to swap its translucent
 * background in/out.
 */
export function useScrolled(threshold = 20): boolean {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > threshold);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [threshold]);

	return scrolled;
}
