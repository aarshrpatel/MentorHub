// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DiscoveryPage from './pages/DiscoveryPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage'; // Import the ProfilePage
import AboutPage from './pages/AboutPage'; 
import SignupPage from './pages/SignupPage';
import NotFoundPage from './pages/NotFoundPage';
import MentorsPage from './pages/MentorsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/discovery" element={<DiscoveryPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} /> {/* Add the ProfilePage route */}
        <Route path='/mentors' element={<MentorsPage />} />
        <Route path='/mentors/:category' element={<MentorsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
