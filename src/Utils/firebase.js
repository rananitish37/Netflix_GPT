// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWk2-wx-dzkgs7E4z8cGlbJyG12fn5gY0",
  authDomain: "netflixgpt-a5e51.firebaseapp.com",
  projectId: "netflixgpt-a5e51",
  storageBucket: "netflixgpt-a5e51.appspot.com",
  messagingSenderId: "161404935781",
  appId: "1:161404935781:web:de7f51ee5caa3fbd13b08c",
  measurementId: "G-C9C910N664"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);