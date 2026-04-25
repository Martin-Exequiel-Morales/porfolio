"use client";

import { MotionConfig } from "motion/react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

export function Providers({ children }: { children: React.ReactNode }) {
	// `reducedMotion="user"` makes every motion component honour the user's
	// `prefers-reduced-motion: reduce` setting — animations collapse to
	// instant state changes for accessibility.
	return (
		<MotionConfig reducedMotion="user">
			<ThemeProvider>
				<LanguageProvider>{children}</LanguageProvider>
			</ThemeProvider>
		</MotionConfig>
	);
}
