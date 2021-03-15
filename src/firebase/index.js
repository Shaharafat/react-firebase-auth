import dotenv from "dotenv";
import firebase from "firebase/app";
import "firebase/auth";

// config dot-env
// const res = dotenv.config({path: '../../'});
// console.log(res);

// var firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AITH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
// };

// console.log(firebaseConfig);
const firebaseConfig = {
    apiKey: "AIzaSyDFhqH1uZFG-yVbXXOX-2l2-jADmtbzBBQ",
    authDomain: "react-firebase-auth-c8ebb.firebaseapp.com",
    projectId: "react-firebase-auth-c8ebb",
    storageBucket: "react-firebase-auth-c8ebb.appspot.com",
    messagingSenderId: "292186397965",
    appId: "1:292186397965:web:9e741f860b52a333416444"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// firebase auth
export const auth = app.auth();

//* google auth provier. It will pass as parameter to sign up with google
export const googleProvider = new firebase.auth.GoogleAuthProvider();
