// Importing necessary hooks and components from React and Firebase.
import React from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Defining the AccessOnAuth component. This component takes `children` as a prop,
// which represents the component(s) that are to be rendered if the user is authenticated.
const AccessOnAuth = ({ children }) => {
    // State for tracking whether the user is logged in.
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // State for tracking if we are still checking the user's auth status.
    const [checkingStatus, setCheckingStatus] = useState(true);
    // Getting the Firebase Auth instance.
    const auth = getAuth();

     // useEffect hook to perform the authentication status check on component mount.
    useEffect(() => {
        // Listening for changes in the user's authentication state.
        onAuthStateChanged(auth, (user) => {          
            if(user) {
                // If a user is found, set isLoggedIn to true.
                setIsLoggedIn(true);
            } else {
                // If no user is found, set isLoggedIn to false.
                setIsLoggedIn(false);
            }
            // Once the check is complete, set checkingStatus to false to stop showing the loading state.
            setCheckingStatus(false);
        });
    }, [auth]); // The effect depends on `auth` and runs whenever `auth` changes.

    // While checking the user's authentication status, show a loading indicator.
    if(checkingStatus) {
        return <div>Loading...</div>;
    }
    // If the user is logged in, render the children components. Otherwise, redirect to the login page.
    return isLoggedIn ? children : <Navigate to="/" replace />;
}

export default AccessOnAuth;