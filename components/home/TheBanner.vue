<script setup>
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
				class="[ lg:-ml-20 lg:mr-60 ] [ relative -bottom-32 md:-bottom-48 lg:-bottom-12 ] [ max-w-full md:max-w-xl lg:max-w-5xl ]">
				<img
					src="/images/phone-app.jpeg"
					alt=""
					class="[ mix-blend-screen opacity-80 ] [ w-full h-auto ]" />
			</div>

			<div
				class="decorative-group [ absolute top-[5%] md:top-6 lg:top-[20%] lg:right-0 ]">
				<div
					class="contacts-decorative [ mt-12 md:mt-16 lg:mt-28 ] [ text-white text-[0.5rem] lg:text-xs ]">
					<span>Contacts</span>
					<ul class="[ mt-2 ]">
						<li v-for="person in people">
							{{ person }}
						</li>
					</ul>
				</div>

				<div class="popup-menu-decorative">
					<div
						class="[ max-w-24 md:max-w-32 lg:max-w-48 ] [ shadow-lg bg-neutral-100/70 ]">
						<img
							src="/images/popup-menu.png"
							alt=""
							class="[ w-full h-auto ]" />
					</div>
				</div>
			</div>
		</div>

		<div
			class="[ mt-auto py-6 ] [ flex flex-col items-center justify-end gap-8 ] [ text-center ]">
			<div>
				<h1 class="[ text-white ]">{{ banner.heading }}</h1>
				<p class="[ mt-3 ] [ text-slate-300 ]">{{ banner.description }}</p>
			</div>

			<Button
				look="primary"
				as="a"
				href="/"
				>Book a demo</Button
			>
		</div>
	</section>
</template>

<style scoped>
	.banner {
		background: linear-gradient(
			168.45deg,
			#000000 48.09%,
			#6f2bda 99.57%,
			#9553fb 101.94%
		);
		background-blend-mode: overlay;
		@apply min-h-[80vh] md:min-h-[65vh];
	}

	.decorative-group {
		@apply flex items-start gap-4 md:gap-10;
	}

	.contacts-decorative {
		@apply p-3 md:p-5 border opacity-55;
		box-sizing: border-box;
	}
</style>
