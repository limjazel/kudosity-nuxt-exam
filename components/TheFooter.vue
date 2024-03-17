<script setup></script>

<template>
	<section class="footer [ bg-stroke ]">
		<h3 class="[ sr-only ]">The footer</h3>

		<div class="[ py-32 px-10 mx-auto ] [ container max-w-screen-xl ]">
			<div
				class="[ flex flex-col md:flex-row gap-20 items-start justify-between md:items-center ]">
				<div class="[ grid gap-8 ] [ w-full md:w-1/3 ]">
					<TheLogo
						class="[ h-7 w-auto ]"
						alt="kudosity logo" />

					<p class="[ text-white/60 font-bold ]">
						Kudosity is the next generation of customer engagement, enabling
						businesses of all sizes to unlock the power of automation at the
						click of a button.
					</p>

					<span class="[ text-white/60 text-xs ]">
						Copyright © 2017-2022 Conversr. All Rights Reserved.
					</span>
				</div>

				<div class="[ flex flex-wrap md:flex-no-wrap gap-8 ] text-white">
					<div class="footer-award">
						<span class="footer-award-logo">
							<CXAwardLogo
								class="h-10 w-auto"
								alt="CX Awards winner logo" />
						</span>

						<p class="footer-award-description">
							Best Use of Technology to Revolutionise CX
						</p>
					</div>

					<div class="footer-award">
						<span class="footer-award-logo">
							<FIALogo
								class="h-12 w-auto"
								alt="Fundraising Institute Australia" />
						</span>

						<p class="footer-award-description">
							Most Innovative Fundraising Campaign
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="postcss">
	.footer-award {
		@apply p-2  grid bg-slate-800 max-w-48;
	}
	.footer-award-logo {
		@apply py-6 px-5 flex justify-center bg-white;
	}
	.footer-award-description {
		@apply py-4 px-2 text-white font-bold text-sm text-center;
	}
</style>
