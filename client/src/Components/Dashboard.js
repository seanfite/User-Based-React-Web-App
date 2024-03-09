import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react';

// Defining the Dashboard functional component.
function Dashboard() {
    // Hook for navigation, allowing us to programmatically change routes.
    const navigate = useNavigate();

    // Function to handle the navigation to the User Settings page.
    const goToSettings = () => {
        navigate('/user-settings');
    }
    // The component renders a container div that centers its children both vertically and horizontally.
    // Inside, it displays a welcome message and a button to navigate to the User Settings.
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <div className='mb-4'>
                <h1>Welcome to the dashboard</h1>
            </div>
            <div>
                <Button outline onClick={goToSettings} type="button">User Settings</Button>
            </div>
        </div>
    );
}

export default Dashboard;