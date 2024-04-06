import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import mentorhublogo from '../assets/mentorhub-logo.png';

function LoginPage() {
  const { loginWithRedirect } = useAuth0(); // Destructure the loginWithRedirect method

  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    color: '#333',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #f093fb, #f5576c)',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  };

  const inputStyle = {
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
  };

  const buttonStyle = {
    padding: '10px',
    fontSize: '16px',
    color: '#fff',
    background: '#333',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const linkStyle = {
    marginTop: '20px',
    textDecoration: 'none',
    color: '#333',
  };

  const imageStyle = {
    width: '200px',
    marginBottom: '20px',
    borderRadius: '50%'
  };

  return (
    <div style={pageStyle}>
      <img src={mentorhublogo} alt='MentorHub Logo' style={imageStyle}/>
      <h1>Login to Your Account</h1>
      {/* Remove the form and replace with a login button */}
      <button onClick={() => loginWithRedirect()} style={buttonStyle}>Log In</button>
      <Link to="/" style={linkStyle}>Back to Home</Link>
    </div>
  );
}

export default LoginPage;
