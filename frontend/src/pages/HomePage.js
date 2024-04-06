import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const homePageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    color: '#333',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 30px',
    fontSize: '16px',
    color: '#fff',
    background: '#333',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  return (
    <div style={homePageStyle}>
      <h1>Welcome to Our Application</h1>
      <p>Connect and grow with mentors from around the world.</p>
      <Link to="/login" style={buttonStyle}>Get Started</Link>
    </div>
  );
}

export default HomePage;
