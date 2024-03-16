<script setup>
	import { computed, ref } from "vue"
	import { useScreen } from "@/composables/use-screen.js"

	const { width } = useScreen()
	const tweets = [
		{
			username: "@rauchg",
			nickname: "Guillermo Rauch",
			content: `Coolest domain. Check Coolest mission. Check Coolest product. Check`,
			date: "Sep 15, 2021",
			time: "5:48 PM",
			likes: "",
			retweets: "36",
			avatar: "",
		},
		{
			username: "@mg",
			nickname: "Matt Galligan",
			content: `The more tools I use like @logseq @raycastapp and @calcom the more I believe in the power of an extension platform. Being able to tailor a tool to fit my needs is huge. So: can we please do the above for an email app, contacts app?`,
			date: "Sep 15, 2021",
			time: "5:48 PM",
			likes: "",
			retweets: "36",
			avatar: "",
		},
		{
			username: "@thomaspaulmann",
			nickname: "Thomas Paul Mann",
			content: `I'm already rocking the new @calcom extension to coordinate my meetings 😎`,
			date: "Sep 7, 2022",
			time: "6:19 AM",
			likes: "",
			retweets: "3",
			avatar: "",
		},
		{
			username: "@farhajmayan",
			nickname: "Farhaj May00n (in Dilli 🇮🇳)",
			content: `As of today I'm officially a @calcom maxi. The product is epic. @peer_rich where can I buy merch??`,
			date: "Feb 17, 2022",
			time: "6:31 AM",
			likes: "",
			retweets: "3",
			avatar: "",
		},
		{
			username: "@thisiskp_",
			nickname: "KP",
			content: `SaaS is eating the world\nAnd Open Source is eating SaaS for breakfast\n\nA lot of alternatives are rising up
	 \nHere are a few:\n\nCalendly - @calcom\nAirtable - @baserow\nZapier - @n8n_io\n\nWhat else?`,
			date: "Jun 21, 2022",
			time: "12:27 PM",
			likes: "",
			retweets: "9",
			avatar: "",
		},
		{
			username: "@jhooks",
			nickname: "joel ⛈",
			content: `I'm already rocking the new @calcom extension to coordinate my meetings 😎`,
			date: "Sep 7, 2022",
			time: "6:19 AM",
			likes: "",
			retweets: "3",
			avatar: "",
		},
		{
			username: "@5harath",
			nickname: "Sharath",
			content: `Probably the first calendar app in web3 space!\n\nGreat work @peer_rich and @calcom team!`,
			date: "Feb 8, 2022",
			time: "1:51 PM",
			likes: "",
			retweets: "2",
			avatar: "",
		},
		{
			username: "@mr_wormhole",
			nickname: "Talha Altinel",
			content: `I am amazed by @calcom (Calendso) 's success, I was quite pessimistic that it would take off as a project in 2020 but here we are using Calendso and trying to self-host with improved documentation 🤣🤣`,
			date: "Feb 8, 2022",
			time: "1:51 PM",
			likes: "",
			retweets: "2",
			avatar: "",
		},
	]
	const groupedTweets = computed(() => {
		if (width.value > 1280) {
			return array_split(tweets, 4)
		}

		if (width.value >= 1024) {
			return array_split(tweets, 3)
		}

		if (width.value > 728) {
			return array_split(tweets, 2)
		}

		return array_split(tweets, 1)
	})

	let testimonialContainerIsToggled = ref(false)

	function array_split(arr, numSplits) {
		const chunkSize = Math.ceil(arr.length / numSplits)
		const result = []

		for (let i = 0; i < arr.length; i += chunkSize) {
			const chunk = arr.slice(i, i + chunkSize)
			result.push(chunk)
		}

		return result
	}

	function toggleTestimonialContainer() {
		testimonialContainerIsToggled.value = !testimonialContainerIsToggled.value
	}
</script>

<template>
	<section class="testimonials-section [ pt-20 md:pt-28 ]">
		<div class="[ mx-auto px-6 lg:px-8 ] [ container ]">
			<h2 class="[ text-3xl md:text-4xl lg:text-5xl text-center ]">
				Loved by the world’s best teams
			</h2>

			<div
				class="testimonial-container [ pt-16 px-6 ] [ relative ]"
				:class="{
					'testimonial-container--is-toggled': testimonialContainerIsToggled,
				}">
				<div
					class="[ grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center ]">
					<div
						v-for="(tweets, index) in groupedTweets"
						:key="index"
						class="[ grid gap-4 content-start ]">
						<div
							v-for="(tweet, index) in tweets"
							:key="index"
							class="testimonial-card">
							<div class="[ flex gap-4 ]">
								<div>avatar here</div>
								<div class="[ grid ]">
									<span>{{ tweet.nickname }}</span>
									<span>{{ tweet.username }}</span>
								</div>
							</div>

							<div v-html="tweet.content.replaceAll('\n', '<br />')"></div>

							<div class="[ mt-12 ] [ flex gap-8 ]">
								<span>{{ tweet.time }}</span>
								<span>{{ tweet.date }}</span>
							</div>

							<div class="[ mt-4 ] [ flex gap-8 ]">
								<div>
									<span>Retweets:</span>
									{{ tweet.retweets }}
								</div>

								<div>
									<span>Likes:</span>
									{{ tweet.likes }}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="[ absolute bottom-0 inset-x-0 ]">
					<div
						class="[ pt-24 md:pt-30 pb-10 ] [ flex justify-center ] [ bg-gradient-to-t from-background via-background/80 to-background/5 ]">
						<Button
							type="button"
							look="custom"
							@click.prevent="toggleTestimonialContainer"
							class="bg-red-500">
							<span v-if="!testimonialContainerIsToggled">Show more</span>
							<span v-else>Show less</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="postcss">
	.testimonial-card {
		@apply px-6 py-5 border rounded;
	}
	.testimonial-container {
		@apply max-h-screen md:max-h-[70vh] overflow-hidden;
	}
	.testimonial-container--is-toggled {
		@apply max-h-full pb-36;
	}
</style>
