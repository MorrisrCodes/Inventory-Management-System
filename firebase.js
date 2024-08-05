// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFC9O4AWh8mciIE5bTxL_5gQbKydUSzxQ",
  authDomain: "inventory-management-sys-9b704.firebaseapp.com",
  projectId: "inventory-management-sys-9b704",
  storageBucket: "inventory-management-sys-9b704.appspot.com",
  messagingSenderId: "261383665550",
  appId: "1:261383665550:web:8e9df52d744d216fc8d6df",
  measurementId: "G-GSXH35YQTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}