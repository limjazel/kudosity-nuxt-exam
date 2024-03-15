<script setup>
import { ref } from "vue"
import UberLogo from "@/components/vendors/UberLogo"
import WineSelectorsLogo from "@/components/vendors/WineSelectorsLogo"
import NSWLogo from "@/components/vendors/NSWLogo"
import TarongaZooLogo from "@/components/vendors/TarongaZooLogo"
import TheUniversityOfMelbourneLogo from "@/components/vendors/TheUniversityOfMelbourneLogo"
import CancerCouncilLogo from "@/components/vendors/CancerCouncilLogo"
import TheSalvationArmyLogo from "@/components/vendors/TheSalvationArmyLogo"
import AustralianRedCrossLogo from "@/components/vendors/AustralianRedCrossLogo"

const logos = [
  {
    name: "Uber",
    component: UberLogo
  },
  {
    name: "Wine Selectors",
    component: WineSelectorsLogo
  },
  {
    name: "Government of New South Wales",
    component: NSWLogo
  },
  {
    name: "Taronga Zoo",
    component: TarongaZooLogo
  },
  {
    name: "The University of Melbourne",
    component: TheUniversityOfMelbourneLogo
  },
  {
    name: "Cancer Council",
    component: CancerCouncilLogo
  },
  {
    name: "The Salvation Army",
    component: TheSalvationArmyLogo
  },
  {
    name: "Australian Red Cross",
    component: AustralianRedCrossLogo
  }
]
</script>

<template>
  <section class="vendors [ py-12 px-10 ]">
    <p class="[ text-neutral-300 text-center ]">Trusted by multiple companies</p>

    <div class="[ mt-8 ] [ flex flex-wrap justify-center gap-x-10 gap-y-8 ]">
      <Component v-for="logo in logos" :is="logo.component"
        class="[ h-8 lg:h-10 w-auto fill-current text-neutral-300 ]">
      </Component>
    </div>
  </section>
</template>

<style lang="postcss">
.vendors {
  @apply bg-stroke
}
</style>