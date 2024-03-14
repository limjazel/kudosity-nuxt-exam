<script setup>
import { ref } from 'vue'
import { useNavigation } from "@/composables/use-navigation"
import { useMobileNavigation } from "@/stores/use-mobile-navigation"

const { links } = useNavigation()
const { mobileMenuIsToggled, handleToggleMobileMenu } = toRefs(useMobileNavigation())
</script>

<template>
  <div v-if="mobileMenuIsToggled" class="[ flex flex-col gap-2 lg:hidden ]">
    <div v-for="link of links">
      <NuxtLink :to="link.url">{{ link.name }}</NuxtLink>
    </div>
  </div>
</template>

<style lang="postcss"></style>