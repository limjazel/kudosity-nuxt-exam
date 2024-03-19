<script setup>
	const title =
		"Kudosity — Grow customer relationships with messaging experiences"
	const description =
		"Scale conversations with Kudosity's 20+ years of messaging innovation. Explore global connectivity, SaaS platforms, and AI- driven conversational automation."
	const previewImage = "https://kudosity.co/img/kudosity-social.jpg"

	useHead({
		title: title,
		meta: [
			{
				name: "description",
				content: description,
			},
		],
	})

	useSeoMeta({
		title: title,
		ogTitle: title,
		description: description,
		ogDescription: description,
		ogImage: previewImage,
		twitterTitle: title,
		twitterDescription: description,
		twitterImage: previewImage,
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
