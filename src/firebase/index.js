/*
 *
 * Title: firebase configuration
 * Description: firebase configuration and auth providers exported
 * Author: Shah Arafat
 *
 */

import firebase from "firebase/app";
import "firebase/auth";

let firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AITH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// firebase auth
export const auth = app.auth();

//* google auth provier. It will pass as parameter to sign up with google
export const googleProvider = new firebase.auth.GoogleAuthProvider();

//* facebook auth provider. It will pass as parameter to sign up with google
export const facebookProvider = new firebase.auth.FacebookAuthProvider();

//* github auth provider. It will pass as parameter to sign up with google
export const githubProvider = new firebase.auth.GithubAuthProvider();
