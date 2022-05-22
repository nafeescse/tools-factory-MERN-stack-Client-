
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBdfRTKOvLV2cFhrUykE3uWm7uP9Qwi6Us",
  authDomain: "autocar-ba11b.firebaseapp.com",
  projectId: "autocar-ba11b",
  storageBucket: "autocar-ba11b.appspot.com",
  messagingSenderId: "643221798603",
  appId: "1:643221798603:web:776258c086a027523ce54e",
  measurementId: "G-RLMS06HWB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
