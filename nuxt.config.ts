// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
	css: ["~/assets/css/main.css"],
	alias: {
		pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
	},
})
