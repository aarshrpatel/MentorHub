import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
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

  return (
    <div style={pageStyle}>
      <h1>Login to Your Account</h1>
      <form style={formStyle}>
        <input
          type="text"
          placeholder="Username"
          style={inputStyle}
          required
        />
        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>Log In</button>
      </form>
      <Link to="/" style={linkStyle}>Back to Home</Link>
    </div>
  );
}

export default LoginPage;
