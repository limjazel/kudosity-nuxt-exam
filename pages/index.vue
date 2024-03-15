<script setup lang="ts">
const homepage = {
	title: 'Kudosity — Grow customer relationships with messaging experiences',
	description:
		"Scale conversations with Kudosity's 20+ years of messaging innovation. Explore global connectivity, SaaS platforms, and AI- driven conversational automation.",
	lang: 'en-US',
	charset: 'utf-8',
	viewport: 'width=device-width,initial-scale=1.0',
	ogTitle: 'Kudosity — Grow customer relationships with messaging experiences',
	ogDescription: "Scale conversations with Kudosity's 20+ years of messaging innovation. Explore global connectivity, SaaS platforms, and AI- driven conversational automation.",
}

useHead({
	title: homepage.title,
	meta: [
		{
			name: 'description',
			content: homepage.description,
		},
		{
			charset: homepage.charSet,
		},
	],
	htmlAttrs: { lang: homepage.lang },
	link: [{ rel: 'viewport', content: homepage.viewport }],
	icon: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, ,],
})

useSeoMeta({
	title: homepage.title,
	ogTitle: homepage.ogTitle,
	description: homepage.description,
	ogDescription: homepage.ogDescription,
	ogImage: 'https://kudosity.co/img/kudosity-social.jpg',
	twitterCard: 'summary_large_image',
})
</script>

<template>
	<main>
		<TheBanner />

		<div class="[ py-12 ] [ bg-stroke ] [ rounded-b-3xl ]">
			<TheVendors />
			<TheFaqs class="[ mt-12 ]" />
		</div>
	</main>
</template>

<style lang="postcss"></style>
