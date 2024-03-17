// new

import { defineStore } from "pinia"
import { ref } from "vue"
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection as firebaseCollection } from "firebase/firestore"

export const useFirebase = defineStore("kdst-firebase", () => {
	const app = ref()
	const db = ref()
	const config = useRuntimeConfig()
	const ready = ref(false)

	async function connect() {
		app.value = initializeApp(config.public.firebase)
		db.value = await getFirestore(app.value)

		ready.value = true
	}

	function collection() {
		return firebaseCollection(db.value, "contact-form")
	}

	return { app, db, ready, connect, collection }
})
