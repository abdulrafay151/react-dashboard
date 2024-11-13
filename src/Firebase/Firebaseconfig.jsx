// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_27aQhn44cc37MevazfIRt6ilTsrqxCo",
  authDomain: "react-project-d5414.firebaseapp.com",
  projectId: "react-project-d5414",
  storageBucket: "react-project-d5414.firebasestorage.app",
  messagingSenderId: "274200608964",
  appId: "1:274200608964:web:d8d69fc349692890d50991",
  measurementId: "G-VSBW5G65TE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);

export {db}
export default app;