// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNW3PjARQFZ_rLSR9S1D5pBuKWUbd0pls",
  authDomain: "project-web-class.firebaseapp.com",
  projectId: "project-web-class",
  storageBucket: "project-web-class.appspot.com",
  messagingSenderId: "933270252394",
  appId: "1:933270252394:web:de4050991cb552add55313"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();