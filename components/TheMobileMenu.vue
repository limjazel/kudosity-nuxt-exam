<script setup>
import { watch, ref } from 'vue'
import { useNavigation } from "@/composables/use-navigation.js"

const { links } = useNavigation()
defineProps(['isToggled'])

</script>

<template>
  <div v-if="isToggled" class="[ flex flex-col gap-2 lg:hidden ]">
    <div v-for="link of links">
      <NuxtLink :to="link.url">{{ link.name }}</NuxtLink>
    </div>
  </div>
</template>

<style lang="postcss"></style>