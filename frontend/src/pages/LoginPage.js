import React, {useState} from 'react';
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';
import mentorhublogo from '../assets/mentorhub-logo.png';
import LoginButton from '../components/LoginButton';

function LoginPage() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [isSignUpHovered, setIsSignUpHovered] = useState(false);

  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    color: '#333',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #DE3235, #0093E9)',
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
    marginTop: '20px',
    padding: '10px 30px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'black',
    background: 'transparent',
    border: 'solid black 5px',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  const buttonHoverStyle = {
    color: 'white',
    background: 'black',
  };

  const linkStyle = {
    marginTop: '20px',
    textDecoration: 'none',
    color: '#000',
  };

  const imageStyle = {
    width: '200px',
    marginBottom: '20px',
    borderRadius: '50%'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', {
        email,
        password
      });

      if (response.status === 200) {
        const userData = response.data;
        localStorage.setItem('currentUser', JSON.stringify(userData));
        navigate("/dashboard");
      } else {
        alert("Failed to login:", response.statusText);
      }
    } catch (error) {
      console.error('Failed to login:', error.message);
    }
  }

  return (
    <div style={pageStyle}>
      <img src={ mentorhublogo } alt='MentorHub Logo' style={imageStyle}/>
      <h1>Login to Your Account</h1>
      <form style={formStyle}>
        <input
          type="email"
          placeholder="Email"
          style={inputStyle}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
         <button style={{ ...buttonStyle, ...(isLoginHovered ? buttonHoverStyle : null) }}
          onClick={handleSubmit}
          onMouseEnter={() => setIsLoginHovered(true)}
          onMouseLeave={() => setIsLoginHovered(false)}
        >
          Log In
        </button> 
        <Link
        to="/signup"
        style={{ ...buttonStyle, ...(isSignUpHovered ? buttonHoverStyle : null) }}
        onMouseEnter={() => setIsSignUpHovered(true)}
        onMouseLeave={() => setIsSignUpHovered(false)}
      >
        Sign Up
      </Link>
      </form>
      <Link to="/" style={linkStyle}>Back to Home</Link>
    </div>
  );
}

export default LoginPage;