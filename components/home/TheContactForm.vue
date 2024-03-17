<script setup>
	import { ref } from "vue"
	import { initializeFirebase } from "@/firebase/use-firebase"
	import { getFirestore } from "firebase/firestore"
	import { collection, getDocs, doc, query, addDoc } from "firebase/firestore"
	import { useVuelidate } from "@vuelidate/core"
	import { contactFormRequiredFields } from "@/helpers/home/use-contact-form-rules"
	import { useEmailValidation } from "@/composables/use-email-validation"
	import { ArrowRightIcon } from "@heroicons/vue/16/solid"

	const formName = "book-a-demo-form"
	const isProcessing = ref(false)
	const config = useRuntimeConfig()
	let form = ref({
		first_name: "",
		last_name: "",
		company: "",
		contact_number: "",
		email_address: "",
		message_subject: "",
		message_content: "",
	})
	const $v = useVuelidate(contactFormRequiredFields, form)
	const isValidEmailAddress = ref(true)

	async function handleFormSubmit() {
		isProcessing.value = true
		isValidEmailAddress.value = useEmailValidation(form.value.email_address)
		$v.value.$validate()

		if ($v.value.$error || !isValidEmailAddress.value) {
			isProcessing.value = false
			return
		}

		const app = await initializeFirebase(config.public.firebase)
		const db = getFirestore(app)
		const $collection = collection(db, "contact-form")

		try {
			const newDocRef = await addDoc($collection, form.value)
			alert(
				"Your message has been sent. Expect a reply in 2-3 business days. Thank you.",
			)

			isProcessing.value = false
			$v.value.$reset()
		} catch (error) {
			alert(
				"There's been an error trying to send your message. Please try again in a few minutes.",
			)

			isProcessing.value = false
		}
	}
</script>

<template>
	<section
		id="contact-form"
		class="contact-form [ py-20 ] [ bg-primary ]">
		<div class="[ px-6 mx-auto ] [ container max-w-screen-xl ]">
			<div class="[ flex flex-wrap lg:flex-nowrap gap-16 md:gap-12 ]">
				<div
					class="[ lg:mr-12 ] [ grid content-start ] [ w-full md:w-1/2 lg:min-w-1/3 ]">
					<h2 class="[ font-bold text-white ]">Book your demo today</h2>

					<div class="[ mt-12 ] [ relative ]">
						<span class="[ absolute ] [ opacity-15 ]">
							<svg
								width="155"
								height="135"
								viewBox="0 0 155 135"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M59.785 27.7397C40.654 34.4397 30.61 49.7401 30.61 70.3081H59.785V134.876H0V68.876C0 37.787 22.958 11.4819 59.785 0.00292969V27.7397ZM154.964 27.7397C135.354 34.9147 125.788 49.7401 125.788 70.3081H154.964V134.876H95.178V68.876C95.178 39.223 117.658 11.0039 154.964 0.00292969V27.7397Z"
									fill="#ACC6CC" />
							</svg>
						</span>

						<p class="[ mt-20 px-4 ] [ text-white/70 ] [ relative z-10 ]">
							“Kudosity was the easiest and most effective marketing tool we’ve
							ever used for
							<span class="[ font-bold ]">lead qualification</span> at Uber.”
						</p>
					</div>

					<span class="[ mt-6 px-4 ] [ text-accent ]">Uber, Singapore</span>
				</div>

				<!-- Form -->
				<div class="[ xl:px-12 ] [ w-full ]">
					<form
						action=""
						@submit.prevent="handleFormSubmit"
						class="[ flex flex-col gap-10 ]">
						<!-- First row -->
						<div class="[ grid md:grid-cols-2 gap-6 ]">
							<div class="[ flex flex-col ]">
								<div class="order-2">
									<label
										:for="`${formName}-input-first-name`"
										class="contact-form-label">
										First name
									</label>
									<Input
										v-model="form.first_name"
										:id="`${formName}-input-first-name`"
										look="line"
										placeholder="First name"
										class="input-custom-focus-visible" />
								</div>

								<span
									v-if="$v.first_name.$error"
									class="contact-form-error-message [ order-1 ]">
									{{ $v.first_name.$errors[0].$message }}
								</span>
							</div>

							<div class="[ flex flex-col ]">
								<div class="order-2">
									<label
										:for="`${formName}-input-last-name`"
										class="contact-form-label">
										Last name
									</label>
									<Input
										v-model="form.last_name"
										:id="`${formName}-input-last-name`"
										look="line"
										placeholder="Last name"
										class="input-custom-focus-visible" />
								</div>

								<span
									v-if="$v.last_name.$error"
									class="contact-form-error-message [ order-1 ]">
									{{ $v.last_name.$errors[0].$message }}
								</span>
							</div>
						</div>
						<!-- / First row -->

						<!-- Second row -->
						<div class="[ grid md:grid-cols-2 gap-6 ]">
							<div class="mt-auto">
								<label
									:for="`${formName}-input-company`"
									class="contact-form-label">
									Company
								</label>
								<Input
									v-model="form.company"
									:id="`${formName}-input-company`"
									look="line"
									placeholder="Company"
									class="input-custom-focus-visible" />
							</div>

							<div class="[ flex flex-col ]">
								<div class="order-2">
									<label
										:for="`${formName}-input-contact-number`"
										class="contact-form-label">
										Phone number
									</label>
									<Input
										v-model="form.contact_number"
										:id="`${formName}-input-contact-number`"
										look="line"
										placeholder="Phone number"
										class="input-custom-focus-visible" />
								</div>

								<span
									v-if="$v.contact_number.$error"
									class="contact-form-error-message [ order-1 ]">
									{{ $v.contact_number.$errors[0].$message }}
								</span>
							</div>
						</div>
						<!-- / Second row -->

						<div class="[ flex flex-col ]">
							<div class="order-2">
								<label
									:for="`${formName}-input-email`"
									class="contact-form-label">
									Email address
								</label>
								<Input
									v-model="form.email_address"
									:id="`${formName}-input-email`"
									look="line"
									placeholder="Email address"
									class="input-custom-focus-visible" />
							</div>

							<div class="flex gap-1">
								<span
									v-if="$v.email_address.$error"
									class="contact-form-error-message [ order-1 ]">
									{{ $v.email_address.$errors[0].$message }}
								</span>

								<span
									v-if="!isValidEmailAddress"
									class="contact-form-error-message [ order-1 ]">
									Please enter a valid email address.
								</span>
							</div>
						</div>

						<div>
							<div>
								<label
									:for="`${formName}-input-message-subject`"
									class="contact-form-label">
									Subject
								</label>
								<Input
									v-model="form.message_subject"
									:id="`${formName}-input-message-subject`"
									look="line"
									placeholder="Subject"
									class="input-custom-focus-visible" />
							</div>
						</div>

						<div>
							<label
								:for="`${formName}-input-message-content`"
								class="contact-form-label">
								Message
							</label>
							<textarea
								v-model="form.message_content"
								:id="`${formName}-input-message-content`"
								placeholder="Message"
								rows="4"
								class="textarea-input input-custom-focus-visible" />
						</div>

						<div>
							<Button
								type="submit"
								look="primary"
								class="[ flex gap-2 ]">
								<span class="[ uppercase ]">Submit request</span>
								<ArrowRightIcon
									class="h-5 w-5"
									aria-hidden="true" />
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="postcss">
	.contact-form-label {
		@apply sr-only;
	}
	.contact-form-error-message {
		@apply text-red-300 text-sm font-semibold relative -top-1;
	}
	.input-custom-focus-visible {
		@apply focus-visible:ring-offset-primary;
	}
	.textarea-input {
		@apply shadow-sm px-4 py-2.5 w-full transition duration-100 
    focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary outline-none
    text-white placeholder:text-white/60 border-b border-white bg-transparent;
	}
</style>
