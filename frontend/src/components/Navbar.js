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
      <Link to="/" style={{ ...styles.navLink, ...styles.logo }}>MentorHub</Link>
      <div style={styles.linksContainer}>
        <Link to="/dashboard" style={styles.navLink}>Dashboard</Link>
        <Link to="/profile" style={styles.navLink}>Profile</Link>
        <Link to="/about" style={styles.navLink}>About Us</Link>
        <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

const styles = {
  logoutButton: {
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: '#DE3235',
    border: 'solid black 2px',
    borderRadius: '10px',
    cursor: 'pointer',
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
  },
  linksContainer: {
    display: 'flex',
    gap: '20px', // Creates space between the links
  },
  navLink: {
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'white',
    border: 'solid black 2px',
    borderRadius: '10px',
    cursor: 'pointer',
    textDecoration: 'none',
  }
};

export default Navbar;
