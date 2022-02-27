// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU7SD3vDzRdd97wJvqFwBtt0TRs5xM8Ew",
  authDomain: "todoreact-1e68e.firebaseapp.com",
  projectId: "todoreact-1e68e",
  storageBucket: "todoreact-1e68e.appspot.com",
  messagingSenderId: "502089629406",
  appId: "1:502089629406:web:321e3e9576638934074c4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;