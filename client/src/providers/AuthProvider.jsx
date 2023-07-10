/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from 'react';
import app from  '../firebase/firebase.config'
export const AuthContext = createContext(null);


const auth = getAuth(app)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const provider = new GoogleAuthProvider();
    const providerGitHub = new GithubAuthProvider();


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const GoogleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const gitHubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, providerGitHub)
    }

    const logOut = () => {
        setLoading(true)
        signOut(auth)
    }

    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        GoogleSignIn,
        gitHubSignIn
    }

    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;