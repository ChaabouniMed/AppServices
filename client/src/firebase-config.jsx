import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjtN560XDoO9g_Fft-rO2tokNO0z7oRJ0",
  authDomain: "myapp-57f8f.firebaseapp.com",
  projectId: "myapp-57f8f",
  storageBucket: "myapp-57f8f.appspot.com",
  messagingSenderId: "969742223179",
  appId: "1:969742223179:web:048939332e8ec206260ace",
  measurementId: "G-CT29VX5JMT"
  };

  const app =initializeApp(firebaseConfig)
  export const auth = getAuth(app)
  export const db = getFirestore(app);
  export const storage = getStorage(app);