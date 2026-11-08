import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQL5wJSlTi9dS3ySSnglmHFs1y-Q9yKpU",
  authDomain: "clone-3c8ab.firebaseapp.com",
  projectId: "clone-3c8ab",
  storageBucket: "clone-3c8ab.firebasestorage.app",
  messagingSenderId: "994290935039",
  appId: "1:994290935039:web:8cc5cfc4a955a1069418ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
