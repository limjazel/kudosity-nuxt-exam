import type { ModuleOptions } from "@nuxtjs/tailwindcss"

const config: ModuleOptions["config"] = {
	theme: {
		extend: {
			colors: {
				accent: "rgb(var(--color-primary) / <alpha-value>)",
			},
		},
	},
}

export default config
