<script setup>
import { toRefs } from 'vue'
import { useNavigation } from "@/composables/use-navigation"
import { useMobileNavigation } from "@/stores/use-mobile-navigation"

const { links } = useNavigation()
const { mobileMenuIsToggled, handleToggleMobileMenu } = toRefs(useMobileNavigation())
</script>

<template>
	<nav>
		<div class="[ flex lg:hidden ]">
			<button type="button" @click="handleToggleMobileMenu">
				<span class="[ sr-only ]">Open mobile menu</span>
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
					aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
				</svg>
			</button>
		</div>

		<div class="[ hidden lg:flex gap-2 ]">
			<div v-for="link of links">
				<NuxtLink :to="link.url">{{ link.name }}</NuxtLink>
			</div>
		</div>
	</nav>
</template>

<style lang="postcss"></style>
