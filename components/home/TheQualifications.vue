<script setup>
	import { ArrowRightIcon } from "@heroicons/vue/16/solid"
</script>

<template>
	<section class="qualifications-section [ pt-24 pb-32 px-6 md:px-10 ]">
		<div
			class="[ mx-auto ] [ container max-w-screen-xl ] [ flex flex-wrap md:flex-nowrap items-center justify-between gap-12 ]">
			<div class="[ grid gap-4 lg:gap-6 justify-start ] [ w-full md:w-1/3 ]">
				<VideoCamIcon class="[ h-12 w-auto ]" aria-hidden="true"/>
				<h2>Lead Qualification</h2>
				<p>
					Increase the quality of your leads, and allow your team to focus on
					converting higher quality leads. Conversr filters your contacts in the
					most efficient way possible.
				</p>

				<div class="[ mt-2 ]">
					<Button
						type="a"
						look="primary"
						class="[ flex gap-2 ]">
						<span class="[ uppercase ]">Book a demo</span>
						<ArrowRightIcon
							class="h-5 w-5"
							aria-hidden="true" />
					</Button>
				</div>
			</div>

			<div class="[ mr-0 lg:mr-10 ] [ relative ]">
				<div class="[ pr-10 ]">
					<NuxtImg
						src="/images/home/dashboard.png"
						alt="dashboard"
						sizes="md:400px lg:620px"
						:placeholder="[620]" />
				</div>

				<div class="[ absolute -bottom-12 lg:-bottom-20 right-0 lg:-right-12 ]">
					<NuxtImg
						src="/images/home/phone-uber-message.png"
						alt="uber message"
						sizes="sm:120px lg:200px"
						:placeholder="[200]"
						loading="lazy" />
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="postcss"></style>
