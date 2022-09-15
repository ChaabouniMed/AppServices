import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
apiKey: "AIzaSyD0GzTjdSm5o-TwPNisbmtKECS4MLYxVsw",
  authDomain: "project2-9cb6a.firebaseapp.com",
  projectId: "project2-9cb6a",
  storageBucket: "project2-9cb6a.appspot.com",
  messagingSenderId: "170336948566",
  appId: "1:170336948566:web:30cb5f3f170a243b6ec6f7",
  measurementId: "G-FFP4JXWK4K"
}
  const app =initializeApp(firebaseConfig)
  export const auth = getAuth(app)
  export const db = getFirestore(app);
  export const storage = getStorage(app);