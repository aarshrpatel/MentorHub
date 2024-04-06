import React from 'react';
import logo from './logo.svg';
import NavBar from './pages/nav/navbar.js';
import LoginPage from './pages/login_page/login_page';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LoginPage />
    </div>
  );
}

export default App;
