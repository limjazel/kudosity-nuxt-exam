import type { ModuleOptions } from "@nuxtjs/tailwindcss"

const config: ModuleOptions["config"] = {
	theme: {
		extend: {
			colors: {
				primary: "rgb(var(--color-primary) / <alpha-value>)",
				accent: "rgb(var(--color-accent) / <alpha-value>)",
				"accent-secondary":
					"rgb(var(--color-accent-secondary) / <alpha-value>)",
				stroke: "rgb(var(--color-stroke) / <alpha-value>)",
			},
		},
	},
}

export default config
