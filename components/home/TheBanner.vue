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
		<div class="[ relative ] [ flex flex-col lg:flex-row items-center ]">
			<div
				class="[ lg:mr-60 ] [ relative -bottom-32 md:-bottom-48 lg:-bottom-12 ] [ max-w-full md:max-w-xl lg:max-w-3xl ]">
				<NuxtImg
					src="/images/home/phone-app.jpeg"
					alt="phone app"
					sizes="400px md:400px lg:680px"
					:placeholder="[680]"
					class="[ mix-blend-screen opacity-60 ] [ w-full h-auto ]">
				</NuxtImg>
			</div>

			<div
				class="decorative-group [ absolute top-[5%] md:top-6 lg:top-[20%] lg:right-0 ]">
				<div
					class="contacts-decorative [ mt-12 md:mt-16 lg:mt-28 ] [ text-white text-[0.5rem] lg:text-[0.65rem] ]">
					<span>Contacts</span>
					<ul class="[ mt-2 ] [ leading-loose ]">
						<li v-for="person in people">
							{{ person }}
						</li>
					</ul>
				</div>

				<div class="popup-menu-decorative">
					<div
						class="[ max-w-24 md:max-w-32 lg:max-w-40 ] [ shadow-lg bg-neutral-100/70 ]">
						<NuxtImg
							src="/images/home/popup-menu.png"
							alt="popup menu"
							sizes="96px md:128px lg:160px"
							:placeholder="[160]">
						</NuxtImg>
					</div>
				</div>
			</div>
		</div>

		<div
			class="[ mt-auto py-6 ] [ flex flex-col items-center justify-end gap-8 ] [ text-center ]">
			<div>
				<h1 class="[ text-white ]">
					Curiosity to <span class="heading-decor">&#60;</span>connect<span
						class="heading-decor"
						>&#62;</span
					>
					with customer conversations
				</h1>
				<p
					class="[ mt-3 mx-auto ] [ text-lg text-center text-slate-300 ] [ max-w-2xl ]">
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
		@apply min-h-[80vh] md:min-h-[65vh] lg:min-h-[40vh];
	}

	.heading-decor {
		@apply not-sr-only relative top-1 text-primary;
	}

	.decorative-group {
		@apply flex items-start gap-4 md:gap-10;
	}

	.contacts-decorative {
		@apply p-3 md:py-2 md:px-4 border opacity-55;
		box-sizing: border-box;
	}
</style>
