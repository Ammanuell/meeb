import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4uRjL6nI6s7vz41pNMSbCLpFzmHl1p0Q",
  authDomain: "bnb-success.firebaseapp.com",
  projectId: "bnb-success",
  storageBucket: "bnb-success.firebasestorage.app",
  messagingSenderId: "824422055097",
  appId: "1:824422055097:web:ac37d351bb8b36f5186f68"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
