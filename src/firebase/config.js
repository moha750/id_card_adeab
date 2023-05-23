// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-VkyS4-_7VdXvxCe7NK_OA7aJvq-RUcE",
  authDomain: "adeab-52cb4.firebaseapp.com",
  projectId: "adeab-52cb4",
  storageBucket: "adeab-52cb4.appspot.com",
  messagingSenderId: "145748044884",
  appId: "1:145748044884:web:5ad2dbab9ecd52a44651c1",
  measurementId: "G-H4EE9MBD1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);