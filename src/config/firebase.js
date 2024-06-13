// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore }  from 'firebase/firestore'




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu5CumXZCRoVugDxXY2C0Bl3y8NrXNdqo",
  authDomain: "reactecom-a6098.firebaseapp.com",
  projectId: "reactecom-a6098",
  storageBucket: "reactecom-a6098.appspot.com",
  messagingSenderId: "25132960356",
  appId: "1:25132960356:web:3f9c2a94fd5c0542f72d71"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)



