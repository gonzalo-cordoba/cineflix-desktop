// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "cineflix-7bb6c.firebaseapp.com",
  projectId: "cineflix-7bb6c",
  storageBucket: "cineflix-7bb6c.appspot.com",
  messagingSenderId: "751269048550",
  appId: "1:751269048550:web:52e5b06ec62d61c6cfcb27",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
