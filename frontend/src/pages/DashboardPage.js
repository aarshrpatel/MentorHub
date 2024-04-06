import React from 'react';
import Navbar from '../components/Navbar'; // Ensure you have a Navbar component
import Footer from '../components/Footer'; // Ensure you have a Footer component

function DashboardPage() {
  return (
    <div style={styles.pageContainer}>
      <Navbar />
      <div style={styles.dashboardContainer}>
        <h1 style={styles.title}>Dashboard</h1>
        <p>Welcome to your Dashboard!</p>
        <p>This is a protected area of the application.</p>
        
        {/* Example content area */}
        <div style={styles.profileContainer}>
          <h2>Your Profile</h2>
          {/* Example Profile Picture, replace 'user.picture' with your image path */}
          <img src="path_to_profile_picture" alt="Profile" style={styles.profilePicture} />
          <p>Email: example@example.com</p>
          <p>Name: John Doe</p>
          {/* Other user-related information can go here */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  dashboardContainer: {
    textAlign: 'center',
    marginTop: '50px',
    flex: '1',
  },
  title: {
    color: '#333',
  },
  profileContainer: {
    marginTop: '20px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    display: 'inline-block',
  },
  profilePicture: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
  }
};

export default DashboardPage;
