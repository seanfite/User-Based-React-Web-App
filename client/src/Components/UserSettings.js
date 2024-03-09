// Import necessary Firebase authentication functions and React functionalities.
import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react';

// Definition of the UserSettings functional component.
function UserSettings() {
    // Firebase auth instance and navigate hook initialization.
    const navigate = useNavigate();
    const auth = getAuth();

    // Function to handle the logout process.
    const handleLogout = () => {
        signOut(auth).then(() => {
             // On successful logout, redirect the user to the login page.
            navigate('/');
        }).catch((error) => {
            // In case of an error during logout, log the error to the console.
            console.error("Logout Error:", error);
        });
    };
    // The component renders a simple UI with a title and a logout button.
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            {/* Section for the title of the User Settings page. */}
            <div className='mb-4'>
                <h1>User Settings</h1>
            </div>
            {/* Section containing the Logout button. */}
            <div>
                <Button outline onClick={handleLogout} type="button">Logout</Button>
            </div>
        </div>
    );
}

export default UserSettings;