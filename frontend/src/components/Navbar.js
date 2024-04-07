import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={{ ...styles.navLink, ...styles.logo }}>MentorHub</Link>
      <div style={styles.linksContainer}>
        <Link to="/discovery" style={styles.navLink}>Discovery</Link>
        <Link to="/dashboard" style={styles.navLink}>Dashboard</Link>
        <Link to="/profile" style={styles.navLink}>Profile</Link>
        <Link to="/about" style={styles.navLink}>About Us</Link>
        <button style={styles.logoutButton} >Logout</button>
        {/* Add more links as needed */}
      </div>
    </nav>
  );
}

const styles = {
  logoutButton: {
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: 'red',
    border: 'solid black 2px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#007bff',
    color: '#fff',
    padding: '10px 20px',
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
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
  }
};

export default Navbar;
