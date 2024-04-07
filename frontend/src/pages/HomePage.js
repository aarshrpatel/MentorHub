import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mentorhublogo from '../assets/mentorhub-logo.png';

function HomePage() {
  const [isHovered, setIsHovered] = useState(false);

  const imageStyle = {
    width: '200px',
    marginBottom: '20px',
    borderRadius: '50%'
  };

  const homePageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    color: 'black',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #DE3235, #0093E9)',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 30px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: isHovered ? 'white' : 'black',
    background: isHovered ? 'black' : 'transparent',
    border: 'solid black 5px',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  return (
    <div style={homePageStyle}>
      <img src={ mentorhublogo } alt='MentorHub Logo' style={imageStyle}/>
      <h1>Welcome to Our Application</h1>
      <p>Connect and grow with mentors from around the world.</p>
      <Link to="/login" style={buttonStyle} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Get Started
      </Link>
    </div>
  );
}

export default HomePage;
