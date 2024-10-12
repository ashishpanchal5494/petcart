// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUWocaW4aGv20DB7npJQWwl7YAL5fKDd0",
  authDomain: "catapp-7714c.firebaseapp.com",
  projectId: "catapp-7714c",
  storageBucket: "catapp-7714c.appspot.com",
  messagingSenderId: "348357407322",
  appId: "1:348357407322:web:5602223562c71913c15e63",
  measurementId: "G-VD7QN6W60Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);