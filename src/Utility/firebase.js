
import firebase from "firebase/compat/app"; // Correct import for Firebase
import "firebase/compat/auth"; // Import Firebase Auth from compat
import "firebase/compat/firestore"; // Import Firestore from compat

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs8H83jdozlFXO7y-HFELUaYlqRtfsOho",
  authDomain: "clone-a333d.firebaseapp.com",
  projectId: "clone-a333d",
  storageBucket: "clone-a333d.appspot.com", // Corrected to use .appspot.com
  messagingSenderId: "838605132370",
  appId: "1:838605132370:web:f366c8dab88a76b95b058b",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Auth and Firestore
export const auth = firebase.auth(); // Use compat auth
export const db = firebase.firestore(); // Use compat Firestore
