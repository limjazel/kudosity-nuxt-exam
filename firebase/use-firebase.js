import { initializeApp } from "firebase/app"

export async function initializeFirebase(config) {
	const app = initializeApp(config)

	return app
}
