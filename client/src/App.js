// Importing Firebase authentication utilities and React.
import { getAuth } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importing the component files for the application.
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import UserSettings from "./Components/UserSettings";
import AccessOnAuth from "./Components/AccessOnAuth";
// Importing the Firebase app configuration to initialize Firebase services.
import app from './firebase.js';
// Importing CSS for the application styling.
import './App.css';
// Importing Flowbite for utility classes and components.
import 'flowbite';

// Initializing Firebase Authentication with the Firebase app configuration.
const auth = getAuth(app);

// The App component is the main component where route definitions are set.
function App() {
  return (
     // Using Router to wrap the application and enable client-side routing.
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
           {/* Route protected by AccessOnAuth to ensure only authenticated users can access it. */}
          <Route path="/dashboard" element={<AccessOnAuth><Dashboard /></AccessOnAuth>} />
          <Route path="/user-settings" element={<AccessOnAuth><UserSettings /></AccessOnAuth>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
