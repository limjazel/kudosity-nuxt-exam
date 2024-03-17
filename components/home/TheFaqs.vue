<script setup>
	import { ref, reactive } from "vue"

	const faqs = [
		{
			question: "How can you reach more customers anywhere?",
			bg_color: "bg-accent-secondary",
			folder_ear_color: "text-accent-secondary",
		},
		{
			question: "How can you boost your engagement?",
			bg_color: "bg-accent",
			folder_ear_color: "text-accent",
		},
		{
			question: "How can you add SMS to your existing apps and platforms?",
			bg_color: "bg-primary",
			folder_ear_color: "text-primary",
		},
	]

	const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	let email = ref("")
	let isProcessing = ref(false)

	function handleSubmitEmailAddress() {
		isProcessing.value = true
		if (emailRegex.test(email.value)) {
			alert(
				`Your request has been sent. A representative will reach out to you via ${email.value} in 2-3 days.`,
			)

			isProcessing.value = false
		}
	}
</script>

<template>
	<section class="faqs-section">
		<div class="[ flex flex-wrap gap-8 ]">
			<div class="[ px-2 md:px-8 ] [ flex flex-col w-full lg:w-[30%] ]">
				<h2 class="[ text-center lg:text-left ]">
					When we ask questions, we grow…
				</h2>

				<div class="[ pt-8 ] [ grid gap-3 ]">
					<p class="[ text-center lg:text-left text-neutral-400 ]">
						Request a free demo to see for yourself
					</p>

					<form
						action=""
						@submit="handleSubmitEmailAddress">
						<div class="[ mt-1 ] [ relative -left-2 ] [ flex items-center ]">
							<label
								for="faqs-contact-input"
								class="[ sr-only ]">
								What's your business email?
							</label>
							<Input
								v-model="email"
								type="text"
								id="faqs-contact-input"
								look="custom"
								placeholder="What's your business email?"
								class="faqs-custom-input" />

							<Button
								type="submit"
								look="custom"
								:disabled="!emailRegex.test(email)"
								class="[ py-4 ] [ bg-accent rounded-full ] [ absolute right-0 ]">
								<span class="[ sr-only ]">Send</span>
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
									</svg>
								</span>
							</Button>
						</div>
					</form>
				</div>
			</div>

			<div class="[ px-4 mt-8 lg:mt-0 lg:px-0 ] [ flex w-full lg:w-[65%] ]">
				<div class="[ grid md:grid-cols-3 gap-10 md:gap-8 content-end ]">
					<div
						v-for="faq of faqs"
						class="[ grid ] [ relative ] [ min-h-40 lg:min-h-48 ]">
						<span
							class="folder-div [ flex flex-col items-center justify-end ] [ rounded-lg ]"
							:class="faq.bg_color">
							<p class="[ py-5 px-6 ] [ text-lg lg:text-2xl font-medium ]">
								{{ faq.question }}
							</p>
						</span>

						<span class="[ absolute -top-4 -right-[0.5px] ] [ max-w-[8rem] ]">
							<FolderEarIcon :class="faq.folder_ear_color" />
						</span>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="postcss">
	.faqs-section {
		@apply mx-auto px-10 md:px-2 container text-white;
	}

	.faqs-custom-input {
		@apply py-4 px-5 bg-stroke border rounded-full placeholder:text-sm;
	}
</style>
