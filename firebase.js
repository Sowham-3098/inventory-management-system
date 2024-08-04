// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "inventory-management-sys-cd401.firebaseapp.com",
  projectId: "inventory-management-sys-cd401",
  storageBucket: "inventory-management-sys-cd401.appspot.com",
  messagingSenderId: "387362313362",
  appId: "1:387362313362:web:b8c8b2f18520e2f54a024b",
  measurementId: "G-CMCDE6B603"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore =getFirestore (app);

export {firestore};