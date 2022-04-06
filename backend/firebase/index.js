// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPRXICm4k03fLEX22WjGz2dC-zqJQk6KU",
  authDomain: "vnvc-d19eb.firebaseapp.com",
  projectId: "vnvc-d19eb",
  storageBucket: "vnvc-d19eb.appspot.com",
  messagingSenderId: "33110884599",
  appId: "1:33110884599:web:beab3c0ac63f4d36b893f2",
  measurementId: "G-T6HZFW2KZC"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebase);

export default firebase;