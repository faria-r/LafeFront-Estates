import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(true);
  const [loading, setLoading] = useState(true);

  //manage user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser.email) {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  //create user with email password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //sign in with email password
  const signIn = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  const authInfo = { user, createUser,signIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;