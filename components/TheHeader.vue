<script setup>
const links = [
	{
		name: 'Home',
		url: '/',
	},
	{
		name: 'Products',
		url: '/products',
	},
	{
		name: 'Customers',
		url: '/customers',
	},
	{
		name: 'Developers',
		url: '/developers',
	},
	{
		name: 'Partners',
		url: '/partners',
	},
	{
		name: 'Resources',
		url: '/resources',
	},
	{
		name: 'About Us',
		url: '/about-us',
	},
]
</script>

<template>
	<nav class="[ flex gap-2 ]">
		<div v-for="link of links">
			<NuxtLink :to="link.url">{{ link.name }}</NuxtLink>
		</div>
	</nav>
</template>

<style lang="postcss"></style>
