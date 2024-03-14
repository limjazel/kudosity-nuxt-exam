<script setup>
import { toRefs } from 'vue'
import { useNavigation } from "@/composables/use-navigation"
import { useMobileNavigation } from "@/stores/use-mobile-navigation"

const { links } = useNavigation()
const { mobileMenuIsToggled, handleToggleMobileMenu } = toRefs(useMobileNavigation())
</script>

<template>
	<div class="bg-stroke">
		<nav class="[ max-w-screen-2xl mx-auto ] [ py-5 md:py-6 px-5 ]">
			<div class="[ flex justify-between lg:hidden ]">
				<NuxtLink to="/">
					<span class="[ sr-only ]">Home</span>
					<TheLogo class="[ h-7 w-auto ]" />
				</NuxtLink>

				<button type="button" @click="handleToggleMobileMenu">
					<span class="[ sr-only ]">Open mobile menu</span>
					<span class="[ text-accent ]">
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
							aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
					</span>
				</button>
			</div>

			<div class="[ hidden lg:flex gap-8 items-center ] [ relative ]">
				<div v-for="link of links" class="[ text-white ] [ flex items-center ]">
					<NuxtLink :to="link.url" :class="{ 'last-link': link === links.slice(-1)[0] }">
						<span :class="{ 'sr-only': link.name.toLowerCase().includes('home') }">{{ link.name }}</span>

						<span v-if="link.show_logo">
							<TheLogo class="[ h-10 w-auto ]" />
						</span>
					</NuxtLink>
				</div>
			</div>
		</nav>
	</div>
</template>

<style>
.last-link {
	position: absolute;
	right: 0;
}
</style>
