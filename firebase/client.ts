import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBB0JeLZeW1CWOjF-6UhvGoEWaY3OWi6gI",
  authDomain: "prepwise-7ccff.firebaseapp.com",
  projectId: "prepwise-7ccff",
  storageBucket: "prepwise-7ccff.firebasestorage.app",
  messagingSenderId: "768518095608",
  appId: "1:768518095608:web:6e8bd6d02210d07ce5f10d",
  measurementId: "G-QTN784EZ30",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
