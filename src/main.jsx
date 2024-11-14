import React from 'react';
import ReactDOM from 'react-dom/client';  // Use 'react-dom/client' for React 18
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import App from './App';  // Import the App component
import './index.css';  // Import the CSS file

// Create a root element and render the app with BrowserRouter
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>  {/* Wrap your App component with BrowserRouter */}
    <App />
  </BrowserRouter>
);
