import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Correct imports
import LoginPage from './components/LoginPage';
import ProductList from './components/ProductList';
import SignUpPage from './components/SignUp';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Hide the splash screen after 3 seconds
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  return (
    <Router>
      <div className="App">
        {showSplash ? (
          <div className="splash-screen">
            <img
              src="/lambton.png" // Correct image path
              alt="Lambton College"
              className="splash-image"
            />
          </div>
        ) : (
          <Routes> {/* Updated to Routes */}
            <Route path="/" element={<LoginPage />} /> {/* Updated component prop to element */}
            <Route path="/signup" element={<SignUpPage />} /> {/* Updated component prop to element */}
            <Route path="/products" element={<ProductList />} /> {/* Updated component prop to element */}
            <Route path="*" element={<Navigate to="/" />} /> {/* Replaces Redirect */}
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;