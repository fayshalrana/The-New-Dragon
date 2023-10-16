import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword,signOut,  getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Fire base/firebase.config';

export const authContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
  //user loading
  const [isLoading, setIsLoading] = useState(true)

  //Register user 
const registerUser = (email, password)=>{
  setIsLoading(true)
  return createUserWithEmailAndPassword(auth, email, password)
} 
  //login with email password
  const loginUser = (email, password) =>{
    setIsLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //get user 
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
      setUser(currentUser)
      setIsLoading(false)
    })
    return() =>{
      unSubscribe();
    }
  },[])

  //LogOut user
  const userSignOut = () =>{
    setIsLoading(true)
    return signOut(auth)
  }





 
    const authInfo = {
      user,
      isLoading,
      registerUser,
      loginUser,
      userSignOut
    }
  return (
    <authContext.Provider value={authInfo}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider
