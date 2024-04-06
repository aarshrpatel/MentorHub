import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';



const LoginButton = () => {
  const buttonStyle = {
    padding: '10px',
    fontSize: '16px',
    color: '#fff',
    background: '#333',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()} style={buttonStyle}>Log In</button>
    )
  )
};

export default LoginButton;
