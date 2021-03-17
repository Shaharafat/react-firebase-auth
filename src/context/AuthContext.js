/*
 *
 * Title: Firebase Authentication Context
 * Description: AuthContext for firebase. this will create a context for authentication
 * Author: Shah Arafat
 * Date: 15-03-2021
 *
 */

import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { Loading } from "../pages";

// create context
const AuthContext = createContext();

// use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthContext Provider with values
export const AuthProvider = ({ children }) => {
  let [currentUser, setCurrentUser] = useState("");
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged will executed in login and logout
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false); // set loading to false to after loading done
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
  };

  // this will login with email and pasword
  let doSigninWithEmailPass = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  // this will reset user password
  let doResetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  // this will remove current user
  let doRemoveUser = () => {
    return currentUser.delete();
  };

  // context value object
  const value = {
    currentUser,
    loading,
    setLoading,
    doSocialSignIn,
    doLogout,
    doSignupWithEmailPass,
    doSigninWithEmailPass,
    doResetPassword,
    doRemoveUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : <Loading />}
    </AuthContext.Provider>
  );
};
