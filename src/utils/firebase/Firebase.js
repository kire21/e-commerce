// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6mYjIkpJxttkaUee07m8dDYPEHlgHhfA",
  authDomain: "e-commerce-db-c0fde.firebaseapp.com",
  projectId: "e-commerce-db-c0fde",
  storageBucket: "e-commerce-db-c0fde.appspot.com",
  messagingSenderId: "734809668209",
  appId: "1:734809668209:web:16603f78874b10d7bdb9d0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
