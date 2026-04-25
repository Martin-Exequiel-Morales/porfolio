import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	// Override default ignores of eslint-config-next.
	globalIgnores([
		// Default ignores of eslint-config-next:
		".next/**",
		"out/**",
		"build/**",
		"next-env.d.ts",
	]),
	{
		// Project-wide stricter rules. We keep them out of the next presets
		// so it's clear which choices are ours.
		rules: {
			// Auto-mark type-only imports with the `type` keyword. Plays nicely
			// with `verbatimModuleSyntax` and lets bundlers strip types more
			// aggressively.
			"@typescript-eslint/consistent-type-imports": [
				"warn",
				{ prefer: "type-imports", fixStyle: "inline-type-imports" },
			],
			// Surface unused symbols, but allow the conventional `_`-prefixed
			// "intentionally ignored" args.
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					caughtErrorsIgnorePattern: "^_",
				},
			],
			// Prevent `0` and `""` from leaking into JSX as visible content.
			// `someNumber && <Foo/>` would otherwise render a literal "0".
			"react/jsx-no-leaked-render": [
				"warn",
				{ validStrategies: ["ternary"] },
			],
		},
	},
]);

export default eslintConfig;
