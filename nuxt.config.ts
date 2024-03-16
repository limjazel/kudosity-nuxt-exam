// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/image"],
	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],
	css: ["~/assets/css/main.css"],
	alias: {
		pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
	},
})
