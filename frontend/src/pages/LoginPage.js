import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../components/LoginButton';

function LoginPage() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <h2>Login Page</h2>
      {!isAuthenticated && <LoginButton />}
      {isAuthenticated && <p>You are already logged in!</p>}
    </div>
  );
}

export default LoginPage;
