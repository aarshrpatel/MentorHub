import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Navbar() {
  let navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('/api/logout');
      if (response.status === 200) {
        navigate("/");
      } else {
        alert("Failed to logout:", response.statusText);
      }
    } catch (error) {
      console.error('Failed to login:', error.message);
    }
  }

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={{ ...styles.logoLink, ...styles.logo }}>MentorHub</Link>
      <div style={styles.linksContainer}>
        <Link to="/discovery" style={styles.navLink}>Discovery</Link>
        <Link to="/dashboard" style={styles.navLink}>Dashboard</Link>
        <Link to="/profile" style={styles.navLink}>Profile</Link>
        
        <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

const styles = {
  logoutButton: {
    margin: 'auto',
    padding: '10px 20px',
    fontSize: '16px',
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: '#DE3235',
    border: 'solid black 2px',
    borderRadius: '10px',
    cursor: 'pointer',
    opacity: '0.9',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #DE3235, #0093E9)',
    color: '#fff',
    padding: '10px 20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '24px',
    alignItems: 'center',
  },
  linksContainer: {
    display: 'flex',
    gap: '20px', // Creates space between the links
  },
  logoLink: {
    margin: 'auto 0',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'white',
    border: 'solid black 2px',
    borderRadius: '10px',
    cursor: 'pointer',
    textDecoration: 'none',
    opacity: '0.7',
  },
  navLink: {
    margin: 'auto',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'linear-gradient(135deg, #DE3235, #0093E9)',
    backgroundColor: 'white',
    border: 'solid black 2px',
    borderRadius: '10px',
    cursor: 'pointer',
    textDecoration: 'none',
    opacity: '0.7',

  }
};

export default Navbar;
