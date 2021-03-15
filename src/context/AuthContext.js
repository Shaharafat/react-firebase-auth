/*
 *
 * Title: Firebase Authentication Context
 * Description: AuthContext for firebase. this will create a context for authentication
 * Author: Shah Arafat
 * Date: 15-03-2021
 *
 */

import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../firebase";

// create context
const AuthContext = createContext();

// use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthContext Provider with values
export const AuthProvider = ({ children }) => {
  let [currentUser, setCurrentUser] = useState("");

  // useEffect(() => {
  //   console.log('authcontext.js mounted')

  //   return () => console.log('authcontext.js unmounted')
  // }, []);

  // google sign up with popup
  let doSingUpWithGoogle = async () => {
    try {
      let response = await auth.signInWithPopup(googleProvider);
      setCurrentUser(response.user.displayName);
    } catch (error) {
      console.error("Error: while signing up with google");
    }
  };

  // context value object
  const value = {
    currentUser,
    doSingUpWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
