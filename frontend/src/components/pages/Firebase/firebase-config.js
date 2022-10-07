import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCn0ZwrkyytMvOp3eU0otnXov2I_bWIGpI",
    authDomain: "salud-os.firebaseapp.com",
    projectId: "salud-os",
    storageBucket: "salud-os.appspot.com",
    messagingSenderId: "215300274299",
    appId: "1:215300274299:web:80a57c774a58d50a234ade"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


export default app
