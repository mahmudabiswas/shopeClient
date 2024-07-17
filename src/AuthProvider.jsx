import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "./Conponents/Firebase/firebase.config";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  // Register
  const register = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // logIn

  const logIn = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // updateUserProfile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // google

  const popUp = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("observe current user", currentUser);
    });
    return () => {
      return unSubscribe;
    };
  }, []);

  // log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const userInfo = {
    user,
    loading,
    register,
    logIn,
    logOut,
    popUp,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
