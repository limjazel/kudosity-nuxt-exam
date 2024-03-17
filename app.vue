<script setup>
	import { onMounted } from "vue"
	import { useFirebase } from "@/firebase/stores/use-firebase"

	const firebase = useFirebase()

	onMounted(() => {
		firebase.connect()
	})
</script>

<template>
	<div>
		<TheHeader />

		<TheMobileMenu />

		<NuxtPage />

		<TheFooter />
	</div>
</template>
