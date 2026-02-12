import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2oILXjLdvKGEZzHJXVGUtyUE-SUn7w54",
  authDomain: "meeb-au.firebaseapp.com",
  projectId: "meeb-au",
  storageBucket: "meeb-au.firebasestorage.app",
  messagingSenderId: "1035320728248",
  appId: "1:1035320728248:web:0d99d1fc54c6300225b24d"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
