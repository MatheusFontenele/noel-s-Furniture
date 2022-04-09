// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV0oeNL6rYjkMmK-xGLwVkArWZEMD01sU",
  authDomain: "crud-test-5db54.firebaseapp.com",
  projectId: "crud-test-5db54",
  storageBucket: "crud-test-5db54.appspot.com",
  messagingSenderId: "142891378562",
  appId: "1:142891378562:web:83202cf741ed0e2f1b119b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
