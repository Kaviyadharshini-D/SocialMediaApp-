// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNpK8GW6OFSwAZ7NJ2s_vHl2uAd4Q0lR8",
  authDomain: "socialmediaapp-246fc.firebaseapp.com",
  projectId: "socialmediaapp-246fc",
  storageBucket: "socialmediaapp-246fc.appspot.com",
  messagingSenderId: "652624651212",
  appId: "1:652624651212:web:f8c206f70a09f398fc7369",
  measurementId: "G-7TK2GE5Y1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);