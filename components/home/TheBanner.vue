<script setup>
	import { ArrowRightIcon } from "@heroicons/vue/16/solid"

	const banner = {
		heading: "Curiosity to connect with customer conversations",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	}

	const people = ["Eliza Thompson", "Logan Smith", "Jenny Kim", "Shane Curtis"]
</script>

<template>
	<section
		class="banner [ px-6 md:px-12 pb-12 md:pb-16 ] [ flex flex-col items-center ]">
		<div
			class="[ lg:pt-8 ] [ flex flex-col lg:flex-row items-center lg:items-start justify-center ]">
			<div class="order-2 lg:order-1 [ lg:mr-10 ] [ max-w-xs md:max-w-md ]">
				<NuxtImg
					src="/images/home/phone-app-2.jpeg"
					alt="phone app"
					format="webp"
					sizes="400px"
					class="[ mix-blend-screen opacity-60 ]">
				</NuxtImg>
			</div>

			<div class="decorative-group [ pt-10 ] [ order-1 lg:order-2 ]">
				<div
					class="contacts-decorative [ mt-12 md:mt-16 lg:mt-24 ] [ text-white text-[0.5rem] lg:text-[0.65rem] ]">
					<span>Contacts</span>
					<ul class="[ mt-2 ] [ leading-loose ]">
						<li v-for="person in people">
							{{ person }}
						</li>
					</ul>
				</div>

				<div class="popup-menu-decorative">
					<div class="[ shadow-lg bg-neutral-100/90 ]">
						<NuxtImg
							src="/images/home/popup-menu.png"
							alt="popup menu"
							format="webp"
							sizes="160px">
						</NuxtImg>
					</div>
				</div>
			</div>
		</div>

		<div
			class="[ -mt-10 py-6 ] [ flex flex-col items-center justify-end gap-8 ] [ text-center ]">
			<div>
				<h1 class="[ text-white ] [ lg:max-w-screen-lg ]">
					Curiosity to
					<span
						class="heading-decor"
						aria-hidden="true"
						>&#60;</span
					>connect<span
						aria-hidden="true"
						class="heading-decor"
						>&#62;</span
					>
					with customer conversations
				</h1>
				<p
					class="[ mt-3 mx-auto ] [ text-base md:text-lg text-center text-slate-300 ] [ max-w-2xl ]">
					{{ banner.description }}
				</p>
			</div>

			<Button
				as="a"
				look="primary"
				href="#contact-form"
				class="[ flex gap-2 ]">
				<span class="[ uppercase ]">Book a demo</span>

				<ArrowRightIcon
					class="h-5 w-5"
					aria-hidden="true" />
			</Button>
		</div>
	</section>
</template>

<style lang="postcss" scoped>
	.banner {
		background: linear-gradient(
			168.45deg,
			#000000 48.09%,
			#6f2bda 99.57%,
			#9553fb 101.94%
		);
		background-blend-mode: overlay;
		@apply min-h-[40vh];
	}

	.heading-decor {
		@apply not-sr-only relative top-1 text-primary;
	}

	.decorative-group {
		@apply hidden lg:flex items-start gap-4 md:gap-10;
	}

	.contacts-decorative {
		box-sizing: border-box;
		@apply p-3 md:py-2 md:px-4 border opacity-55 select-none pointer-events-none;
	}
</style>
