import { ref } from "vue"

export function useScreen() {
	const width = ref(null)
	const height = ref(null)

	function handleResize() {
		width.value = window.innerWidth
		height.value = window.innerHeight
	}

	onMounted(() => {
		handleResize()
		window.addEventListener("resize", handleResize)
	})

	onUnmounted(() => {
		window.removeEventListener("resize", handleResize)
	})

	return { width, height }
}
