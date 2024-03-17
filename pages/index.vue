<script setup lang="ts">
	const homepage = {
		title: "Kudosity — Grow customer relationships with messaging experiences",
		description:
			"Scale conversations with Kudosity's 20+ years of messaging innovation. Explore global connectivity, SaaS platforms, and AI- driven conversational automation.",
		lang: "en-US",
		charset: "utf-8",
		viewport: "width=device-width,initial-scale=1.0",
		ogTitle:
			"Kudosity — Grow customer relationships with messaging experiences",
		ogDescription:
			"Scale conversations with Kudosity's 20+ years of messaging innovation. Explore global connectivity, SaaS platforms, and AI- driven conversational automation.",
	}

	useHead({
		title: homepage.title,
		meta: [
			{
				name: "description",
				content: homepage.description,
			},
			{
				charset: homepage.charSet,
			},
		],
		htmlAttrs: { lang: homepage.lang },
		link: [
			{ rel: "viewport", content: homepage.viewport },
			{ rel: "preconnect", href: "https://fonts.googleapis.com" },
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossorigin: true,
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Space+Grotesk:wght@300..700&display=swap",
			},
			{
				rel: "preload",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Space+Grotesk:wght@300..700&display=swap",
				as: "style",
			},
		],
		icon: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	})

	useSeoMeta({
		title: homepage.title,
		ogTitle: homepage.ogTitle,
		description: homepage.description,
		ogDescription: homepage.ogDescription,
		ogImage: "https://kudosity.co/img/kudosity-social.jpg",
		twitterCard: "summary_large_image",
	})
</script>

<template>
	<main>
		<TheBanner />

		<div class="[ pt-12 pb-24 md:pb-36 ] [ bg-stroke ] [ rounded-b-3xl ]">
			<TheVendors />
			<TheFaqs class="[ mt-12 ]" />
		</div>

		<TheQualifications />

		<TheFeatures />

		<TheTestimonials />

		<TheContactForm />
	</main>
</template>

<style lang="postcss"></style>
