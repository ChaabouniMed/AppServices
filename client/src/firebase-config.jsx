import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAy6STnu2SaKTZvjPoyVESq5ubrCTa7QFA",
    authDomain: "reactapp-800a9.firebaseapp.com",
    projectId: "reactapp-800a9",
    storageBucket: "reactapp-800a9.appspot.com",
    messagingSenderId: "249367253558",
    appId: "1:249367253558:web:f1abc83e3b7008b2bb3e97",
    measurementId: "G-EWJ5570CKP"
  };

  const app =initializeApp(firebaseConfig)
  export const auth = getAuth(app)
  export const db = getFirestore(app);