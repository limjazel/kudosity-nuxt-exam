<script setup>
const LookOptions = {
  line:
    'input--line [ text-white placeholder:text-white/60 ] [ border-b border-white bg-transparent ]',
  custom: 'input--custom-look'
}

const model = defineModel()
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  look: {
    type: String,
    required: true,
    default: 'line',
  },
})
</script>

<template>
  <input v-model="model" :name="props.name"
    class="input [ shadow-sm px-4 py-2.5 w-full transition duration-100 ] [ focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-stroke outline-none ]"
    :class="[[LookOptions[props.look]]]" />
</template>

<style lang=" postcss"></style>
