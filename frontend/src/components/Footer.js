import React from 'react';

function Footer() {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.footerContent}>
        <p style={styles.text}>© 2024 MentorHub, Inc. All rights reserved.</p>
        {/* You can add more links or text here */}
        <div style={styles.linkContainer}>
          <a href="/terms" style={styles.link}>Terms of Service</a>
          <a href="/privacy" style={styles.link}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footerContainer: {
    background: '#333',
    color: '#fff',
    padding: '20px 0',
    marginTop: 'auto', // This helps to push the footer to the bottom of the page
  },
  footerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    marginBottom: '10px',
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px', // This creates some space between the links
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
  }
};

export default Footer;