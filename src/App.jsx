import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Users from './Components/Users';
import Products from './Components/Products';
import UsersForm from './Components/UsersForm';
import Comment from './Components/Comment';
import Signup from './Components/Signup';
import Login from './Components/Login';
import ProductsForm from './FormComponent/ProductsForm';
import SignupUsershow from './Components/SignupUsershow';
import ProductsShow from './FormComponent/ProductsShow';
import CommentForm from './FormComponent/CommentForm';
import CommentShow from './FormComponent/CommentShow';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();  // Using navigate here

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLogged(!!user);  // Set logged-in status based on Firebase user
    });
    return () => unsubscribe();
  }, [auth]);

  // Handle logout action
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsLogged(false);  // Update state to logged out
        navigate('/');  // Redirect to home (or login page)
        alert("You have been logged out successfully!")
      })
      .catch((error) => {
        alert("Error during logout");
        console.error("Error signing out: ", error);
      });
  };

  const SignupButton = () => {
    navigate('/');  // Navigate to signup page if not logged in
  };

  return (
    <div className="App">
      <div className='flex justify-between border border-white border-2'>
        <div className='w-[90%]'>
          {/* Your Header component here */}
          <Header />
        </div>

        {/* Conditionally render buttons */}
        <div className='w-[10%] px-6 bg-blue-500 font-bold shadow-md flex justify-center items-center'>
          {isLogged ? (
            <button 
              className='bg-gray-200 rounded hover:bg-gray-300 px-5 py-3'
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <button 
              className='bg-gray-200 rounded hover:bg-gray-300 px-5 py-3'
              onClick={SignupButton}
            >
              Signup
            </button>
          )}
        </div>
      </div>

      <div className='grid grid-cols-[1fr_4fr]'>
        <div className='bg-cyan-200'>
          <Dashboard />
        </div>
        <div>
          <Routes>
            <Route path="/ProductsShow" element={<ProductsShow />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/UserForm" element={<UsersForm />} />
            <Route path="/Comment" element={<Comment />} />
            <Route path="/" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/ProductsForm" element={<ProductsForm />} />
            <Route path="/SignupUsershow" element={<SignupUsershow />} />
            <Route path="/CommentForm" element={<CommentForm />} />
            <Route path="/CommentShow" element={<CommentShow />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

