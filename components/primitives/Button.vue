<script setup>
import { ref } from 'vue'

const LookOptions = {
  primary: 'button--primary [ bg-accent hover:bg-accent/80 focus:bg-accent/80 ]',
}

const SizeOptions = {
  tiny: 'button--tiny [ px-2 py-1 text-xs font-medium ]',
  small: 'button--small [ px-3 py-1.5 text-sm font-medium tracking-tight ]',
  medium: 'button--medium [ px-4 py-2 text-sm font-medium tracking-tight ]',
  trigger: '[ px-4 py-2 ]',
  large: 'button--medium [ px-6 py-3 text-base font-medium tracking-tight ]',
  icon: 'button--icon [ p-2.5 ]',
  custom: 'button--custom-size',
}

const props = defineProps({
  as: {
    type: String,
    default: 'button',
  },
  look: {
    type: String,
    required: true,
    default: 'accent',
  },
  size: {
    type: String,
    default: 'large',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  class: {
    type: String,
    default: '',
  },
})

const $root = ref()

function focus() {
  if ($root.value) {
    $root.value.focus()
  }
}

defineExpose({ focus })
</script>

<template>
  <Component ref="$root" :is="props.as" :aria-disabled="props.disabled" :disabled="props.disabled"
    class="button [ cursor-pointer inline-flex flex-wrap items-center transition duration-100 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-stroke outline-none ]"
    :class="[[LookOptions[props.look]], [SizeOptions[props.size]], [props.class]]">
    <slot />
  </Component>
</template>

<style lang="postcss" scoped></style>
