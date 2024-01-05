import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1u74Jt0kTLk78hunfhCqFyIFBdFCJWaI",
  authDomain: "signal-clone1-6263a.firebaseapp.com",
  projectId: "signal-clone1-6263a",
  storageBucket: "signal-clone1-6263a.appspot.com",
  messagingSenderId: "652551280411",
  appId: "1:652551280411:web:16d1535d72be2f848525be",
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();