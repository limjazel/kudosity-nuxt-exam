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
		ogImage: "https://kudosity.co/img/kudosity-social.jpg",
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
	})

	useSeoMeta({
		title: homepage.title,
		ogTitle: homepage.ogTitle,
		description: homepage.description,
		ogDescription: homepage.ogDescription,
		ogImage: homepage.ogImage,
		twitterTitle: homepage.ogTitle,
		twitterDescription: homepage.ogDescription,
		twitterImage: homepage.ogImage,
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
