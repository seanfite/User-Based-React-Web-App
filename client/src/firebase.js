
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDjp8PdWjTdUUFMBBb_yTigZvFPSxnbs-c",
  authDomain: "react-web-app-4e289.firebaseapp.com",
  projectId: "react-web-app-4e289",
  storageBucket: "react-web-app-4e289.appspot.com",
  messagingSenderId: "182567658484",
  appId: "1:182567658484:web:464b842158d4f5a3cd0fa1",
  measurementId: "G-MNESLGS2HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;