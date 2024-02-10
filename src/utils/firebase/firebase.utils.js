import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVeYBe8qVOiDcDYPIxXNDqg8QpwTWcgOY",
  authDomain: "crwn-clothing-db-665cf.firebaseapp.com",
  projectId: "crwn-clothing-db-665cf",
  storageBucket: "crwn-clothing-db-665cf.appspot.com",
  messagingSenderId: "512338272200",
  appId: "1:512338272200:web:4256502b456fbef13eaafd",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
