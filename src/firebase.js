// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvsUXnPI0F618CDeApF4pvbMGk7IObfrI",
  authDomain: "cloneproject-5f579.firebaseapp.com",
  projectId: "cloneproject-5f579",
  storageBucket: "cloneproject-5f579.appspot.com",
  messagingSenderId: "706379911145",
  appId: "1:706379911145:web:b4c82c525f43e4e2640578",
  measurementId: "G-W72W9XTQMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);