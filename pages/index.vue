<script setup lang="ts">
	const homepage = {
		title: "Kudosity — Grow customer relationships with messaging experiences",
		description:
			"Scale conversations with Kudosity's 20+ years of messaging innovation. Explore global connectivity, SaaS platforms, and AI- driven conversational automation.",
		image: "https://kudosity.co/img/kudosity-social.jpg",
	}

	useHead({
		title: homepage.title,
		meta: [
			{
				name: "description",
				content: homepage.description,
			},
		],
	})

	useSeoMeta({
		title: homepage.title,
		ogTitle: homepage.title,
		description: homepage.description,
		ogDescription: homepage.description,
		ogImage: homepage.image,
		twitterTitle: homepage.title,
		twitterDescription: homepage.description,
		twitterImage: homepage.image,
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
