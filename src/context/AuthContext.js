/*
 *
 * Title: Firebase Authentication Context
 * Description: AuthContext for firebase. this will create a context for authentication
 * Author: Shah Arafat
 * Date: 15-03-2021
 *
 */

import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider, facebookProvider } from "../firebase";

// create context
const AuthContext = createContext();

// use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthContext Provider with values
export const AuthProvider = ({ children }) => {
  let [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    // onAuthStateChanged will executed in login and logout
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
    });

    // unsubscribe when unmounting the component
    return unsubscribe;
  }, []);

  // google sign up with popup
  let doSocialSignIn = (provider) => {
      return auth.signInWithPopup(provider);
  };

  // this will logout a user
  let doLogout = () => {
     return auth.signOut();
  };

  // this will signup with email and pasword
  let doSignupWithEmailPass = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  // context value object
  const value = {
    currentUser,
    doSocialSignIn,
    doLogout,
    doSignupWithEmailPass,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
