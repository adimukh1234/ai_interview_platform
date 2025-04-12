import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo6B3YfXEeEUMXYK-KeI61swuBZqo5DnQ",
  authDomain: "prepwise-f91df.firebaseapp.com",
  projectId: "prepwise-f91df",
  storageBucket: "prepwise-f91df.firebasestorage.app",
  messagingSenderId: "257608804136",
  appId: "1:257608804136:web:b9a8b5418c261c3d33521d",
  measurementId: "G-SCQPH3GKC1"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
