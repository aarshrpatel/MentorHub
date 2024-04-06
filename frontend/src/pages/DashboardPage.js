import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function DashboardPage() {
  const { user, logout } = useAuth0();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Dashboard</h1>
      <p>Welcome to your Dashboard, {user.name}!</p>
      <p>This is a protected area of the application that requires authentication.</p>
      
      {/* Example content */}
      <div>
        <h2>Your Profile</h2>
        <img src={user.picture} alt="Profile" style={{ borderRadius: '50%' }} />
        <p>Email: {user.email}</p>
        <p>Name: {user.name}</p>
        {/* Other user-related information can go here */}
      </div>

      {/* Logout Button */}
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    </div>
  );
}

export default DashboardPage;
