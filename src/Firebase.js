import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmUpbp_KlNpzOPFXMSl-VDI5ulu3ZpkM0",
  authDomain: "skedule-ad781.firebaseapp.com",
  projectId: "skedule-ad781",
  storageBucket: "skedule-ad781.appspot.com",
  messagingSenderId: "672236081486",
  appId: "1:672236081486:web:12537fb7f5615314108e1f",
  measurementId: "G-HZPCSVXP90",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };
