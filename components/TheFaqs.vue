<script setup>
const faqs = [
  {
    question: "How can you reach more customers anywhere?",
    bg_color: ""
  },
  {
    question: "How can you boost your engagement?",
    bg_color: "bg-accent"
  },
  {
    question: "How can you add SMS to your existing apps and platforms?",
    bg_color: "bg-primary"
  },
]
</script>

<template>
  <section class="faqs [ mx-auto px-10 md:px-2 ] [ container text-white ]">
    <div class="[ flex flex-wrap gap-8 ]">
      <div class="[ px-8 ] [ flex flex-col w-full lg:w-[30%] ]">
        <h2 class="[ text-center lg:text-left ]">When we ask questions, we grow…</h2>

        <div class="[ pt-6 ] [ grid gap-3 ]">
          <p class="[ text-center lg:text-left ]">Request a free demo to see for yourself</p>
          <Input type="text" name="faqs-contact-input" look="custom" placeholder="What's your business email?" />
        </div>
      </div>

      <div class="[ mt-8 lg:mt-0 px-4 lg:px-0 ] [ flex w-full lg:w-[65%] ] ">
        <div class="[ grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 ]">
          <span v-for="faq of faqs" class="[ grid ]">
            <span class="[ flex flex-col items-center justify-end ]" :class="faq.bg_color || 'bg-accent'">
              <p class="[ p-5 ] [ text-lg font-medium ]">{{ faq.question }}</p>
            </span>
          </span>
        </div>
      </div>

    </div>
  </section>
</template>

<style lang="postcss"></style>