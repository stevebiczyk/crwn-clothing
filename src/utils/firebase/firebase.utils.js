import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userDocSnapshot = await getDoc(userDocRef);
  console.log(userDocSnapshot);
  console.log(userDocSnapshot.exists());

  if (!userDocSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error("Error creating user", error.message);
    }
  }
  return userDocRef;
};
