<script setup>
	import { ref, reactive } from "vue"
	import { useEmailValidation } from "@/composables/use-email-validation"
	import { ArrowRightIcon } from "@heroicons/vue/16/solid"
	import { useEmailAddress } from "@/stores/use-email-address"

	const useEmailStore = useEmailAddress()
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

	let email = ref("")

	function handleSubmitEmailAddress() {
		useEmailStore.storeEmail(email.value)
		const targetElement = document.getElementById("contact-form")
		targetElement.scrollIntoView({ behavior: "smooth" })
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

					<form @submit.prevent="handleSubmitEmailAddress">
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
								:disabled="!useEmailValidation(email)"
								class="[ py-4 ] [ bg-accent rounded-full ] [ absolute right-0 ]">
								<span class="[ sr-only ]">Send</span>

								<ArrowRightIcon
									class="h-5 w-5"
									aria-hidden="true" />
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
							<p
								class="[ font-grotesk ] [ py-5 px-6 ] [ text-lg lg:text-2xl font-medium ]">
								{{ faq.question }}
							</p>
						</span>

						<span class="[ absolute -top-4 -right-[0.5px] ] [ max-w-[8rem] ]">
							<FolderEarIcon
								:class="faq.folder_ear_color"
								aria-hidden="true" />
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
