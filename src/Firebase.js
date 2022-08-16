import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf7NI1yXanUMLufBzevVjs1LhoKSBbdF4",
  authDomain: "cityhospital-ba0a4.firebaseapp.com",
  projectId: "cityhospital-ba0a4",
  storageBucket: "cityhospital-ba0a4.appspot.com",
  messagingSenderId: "842675662298",
  appId: "1:842675662298:web:e1b9551223f6c9223f64e3",
  measurementId: "G-VB6NBVLM8K" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();