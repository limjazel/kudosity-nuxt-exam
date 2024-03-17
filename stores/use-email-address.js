import { defineStore } from "pinia"
import { ref } from "vue"

export const useEmailAddress = defineStore("use-email", () => {
	const email = ref("w")

	function storeEmail($email) {
		email.value = $email
	}

	return { email, storeEmail }
})
