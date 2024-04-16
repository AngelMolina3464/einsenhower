import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBenAvu9n_JRhimiSaMYokbL0ph1q1UGe0",
    authDomain: "pruebita-bad82.firebaseapp.com",
    projectId: "pruebita-bad82",
    storageBucket: "pruebita-bad82.appspot.com",
    messagingSenderId: "955057560995",
    appId: "1:955057560995:web:861e0db51cc5621fb30e16"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);