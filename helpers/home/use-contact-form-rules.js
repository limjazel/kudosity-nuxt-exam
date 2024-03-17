import { computed } from "vue"
import { required, helpers } from "@vuelidate/validators"

export const contactFormRequiredFields = computed(() => {
	return {
		first_name: {
			required: helpers.withMessage("First name is required.", required),
		},
		last_name: {
			required: helpers.withMessage("Last name is required.", required),
		},
		company: {},
		contact_number: {
			required: helpers.withMessage("Contact number is required.", required),
		},
		email_address: {
			required: helpers.withMessage("Email address is required.", required),
		},
		message_subject: "",
		message_content: "",
	}
})
