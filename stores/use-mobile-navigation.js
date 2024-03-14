import { defineStore } from "pinia"
import { ref } from "vue"

export const useMobileNavigation = defineStore("mobile-navigation", () => {
	const mobileMenuIsToggled = ref(false)

	function handleToggleMobileMenu() {
		mobileMenuIsToggled.value = !mobileMenuIsToggled.value
	}

	return { mobileMenuIsToggled, handleToggleMobileMenu }
})
