<script setup>
import { ref } from 'vue'
import { useNavigation } from "@/composables/use-navigation"
import { useMobileNavigation } from "@/stores/use-mobile-navigation"

const { links } = useNavigation()
const { mobileMenuIsToggled, handleToggleMobileMenu } = toRefs(useMobileNavigation())
</script>

<template>
  <div v-if="mobileMenuIsToggled" class="[ fixed inset-0 top-16 z-50 lg:hidden ]">
    <div class="[ absolute inset-0 ] [ bg-gradient-to-b from-black to-stroke ]">
      <nav class="[ px-6 py-4 ] [ flex flex-col gap-6 ]">
        <div v-for="link of links" class="[ text-white ]">
          <NuxtLink :to="link.url" @click="handleToggleMobileMenu">{{ link.name }}</NuxtLink>
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="postcss"></style>