import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Ensure HomePage is default exported
import LoginPage from './pages/LoginPage'; // Ensure LoginPage is default exported
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
