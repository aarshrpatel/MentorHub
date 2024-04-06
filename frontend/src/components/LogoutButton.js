import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const buttonStyle = {
    padding: '10px',
    fontSize: '16px',
    color: '#fff',
    background: '#333',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button onClick={() => logout()} style={buttonStyle}>Log Out</button>
    )
  )
};

export default LogoutButton;
