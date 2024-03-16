<script setup>
	import TaskAutomationIcon from "@/components/home/decorative/features/TaskAutomationIcon"
	import CustomerJourneysIcon from "@/components/home/decorative/features/CustomerJourneysIcon"
	import BusinessIntelligenceIcon from "@/components/home/decorative/features/BusinessIntelligenceIcon"
	import { ChevronDoubleRightIcon } from "@heroicons/vue/16/solid"

	const features = [
		{
			name: "Task Automation",
			description:
				"Reduce your operational expenditure by getting tasks done better, faster, and cheaper with our turnkey automation solutions. Quick no code implementation.",
			cta: "Get started in 5 minutes",
			icon: TaskAutomationIcon,
		},
		{
			name: "Customer Journeys",
			description:
				"Deliver an AI powered customer experience that builds strong brand loyalty. Develop 1:1 relationships at scale to increase your revenue in a more sustainable way.",
			cta: "Deliver a better CX",
			icon: CustomerJourneysIcon,
		},
		{
			name: "Business Intelligence",
			description:
				"Conversr Engagement scoring identifies high propensity leads within your data, increasing telemarketing conversion rates by 5x on average.",
			cta: "Award-winning solutions",
			icon: BusinessIntelligenceIcon,
		},
	]
</script>

<template>
	<section class="features-section [ py-20 md:py-28 ] [ bg-[#BBACD3]/10 ]">
		<div class="[ mx-auto px-6 lg:px-8 ] [ container ]">
			<div class="[ grid gap-4 ] [ text-center ]">
				<h2 class="[ text-3xl md:text-4xl lg:text-5xl ]">
					Nothing Like Kudosity in the Market
				</h2>
				<p class="[ md:mt-4 ]">
					Create curated customer journey’s that deliver real business value
				</p>
			</div>

			<div
				class="[ pt-14 md:pt-20 ] [ grid lg:grid-cols-3 gap-12 content-start justify-center justify-items-center ]">
				<div
					v-for="(feature, index) of features"
					:key="`feature-${index}`"
					class="[ feature-card ]">
					<div class="[ flex gap-6 items-center ]">
						<span>
							<Component
								:is="feature.icon"
								class="[ h-12 w-auto ]">
							</Component>
						</span>

						<h4 class="[ max-w-20 ]">{{ feature.name }}</h4>
					</div>

					<p class="[ text-stroke/80 ]">{{ feature.description }}</p>
					<a
						href="/"
						class="[ flex gap-2 ] [ text-accent-secondary font-semibold ]">
						{{ feature.cta }}

						<ChevronDoubleRightIcon
							class="[ h-6 w-6 stroke-1 ]"
							aria-hidden="true" />
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="postcss">
	.feature-card {
		@apply px-8 py-10 grid gap-8 bg-white shadow-lg rounded-2xl;
	}
</style>
