//Do not store conFig on the client side
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeZKQ9ygnNoGJ8y_NvvcCsta7AUk-7zdg",
  authDomain: "simple-firebase-75697.firebaseapp.com",
  projectId: "simple-firebase-75697",
  storageBucket: "simple-firebase-75697.firebasestorage.app",
  messagingSenderId: "16172125078",
  appId: "1:16172125078:web:cd248cfe6a350904d06bb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getDatabase(app);
const auth=getAuth(app);

export default auth;

