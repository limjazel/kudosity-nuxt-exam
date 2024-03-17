export const useEmailValidation = (email) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	return emailRegex.test(email)
}
