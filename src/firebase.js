// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC66VIOBcBfV7Nszds7BAOU1T19U2Hr-Eg",
  authDomain: "kristenwegner-page.firebaseapp.com",
  projectId: "kristenwegner-page",
  storageBucket: "kristenwegner-page.appspot.com",
  messagingSenderId: "492967890064",
  appId: "1:492967890064:web:a7e8af6da4553bd6559c15",
  measurementId: "G-EBZ5R4X9WX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);