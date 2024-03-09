// Importing necessary hooks and components from React, Flowbite, and Firebase.
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

// Login component definition.
function Login() {
    // State variables to store user input and feedback messages.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Firebase auth instance and navigate hook initialization.
    const auth = getAuth();
    const navigate = useNavigate();

     // Function to handle form submission.
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior.
        // Resetting error and success messages on new submission.
        setError('');
        setSuccessMessage('');

        try {
            // Attempt to sign in with email and password.
            await signInWithEmailAndPassword(auth, email, password);
            // On successful login, set a success message and redirect to the dashboard.
            setSuccessMessage("Logging you in...");
            navigate('/dashboard'); // Redirect to the dashboard page.
        } catch (error) {
            // On failure, set an error message and log the error for debugging.
            setError('Failed to log in');
            console.error(error.message);
        }
    };

    return(
        <div className='flex items-center justify-center min-h-screen'>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[250px] md:w-[400px]">
                <h2 className='text-2xl font-bold text-center'>Login</h2>
                <div>
                    {/* Email input */}
                    <div className="mb-2 block">
                    <Label className='flex items-start' htmlFor="email" value="Your email" />
                    </div>
                    <TextInput 
                        id="email" 
                        type="email" 
                        placeholder="name@flowbite.com" 
                        required 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div>
                    {/* Password input */}
                    <div className="mb-2 block">
                    <Label className='flex items-start' htmlFor="password" value="Your password" />
                    </div>
                    <TextInput 
                        id="password" 
                        type="password" 
                        required 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                {/* Remember me checkbox */}
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                 {/* Error and success messages */}
                {error && <p className='text-red-500'>{error}</p>}
                {successMessage && <p className='text-green-500'>{successMessage}</p>}
                {/* Submit button */}
                <Button outline type="submit">Submit</Button>
            </form>
        </div>
    );
}

export default Login;