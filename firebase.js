// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6jTV-oVtAnrDYgjWufvCafF5mrXhjhyg",
  authDomain: "cruzo-e61fe.firebaseapp.com",
  projectId: "cruzo-e61fe",
  storageBucket: "cruzo-e61fe.appspot.com",
  messagingSenderId: "941412585424",
  appId: "1:941412585424:web:d84303552edb138965b3d5",
  measurementId: "G-FN94KQFGK7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
