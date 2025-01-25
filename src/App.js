import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ProductList from './components/ProductList';
import SignUpPage from './components/SignUpPage';

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
              src="/public/lambton.png" // Lambton College Image
              alt="Lambton College"
              className="splash-image"
            />
          </div>
        ) : (
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/products" component={ProductList} />
            <Redirect to="/" />
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;