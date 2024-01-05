import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBea_J3OLe4H7c8eSouwS0LxKQc0Ft00HY",
    authDomain: "viajesdya-a3c84.firebaseapp.com",
    projectId: "viajesdya-a3c84",
    storageBucket: "viajesdya-a3c84.appspot.com",
    messagingSenderId: "407741751811",
    appId: "1:407741751811:web:56b6fa326c34e8f0d0a436",
    measurementId: "G-SQZES81P5E"
  };

export const environment = {
    production: false,
    firebaseConfig: firebaseConfig,
  };

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries