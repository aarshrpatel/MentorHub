import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; // Ensure you have a Footer component
import mentorhublogo from '../assets/mentorhub-logo.png'; // Import the MentorHub logo

function AboutPage() {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: isHovered ? 'white' : 'black',
    background: isHovered ? 'black' : 'transparent',
    border: 'solid black 2px',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  return (
    <>
      <div style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Back to Home</Link>
      </div>
      <div style={{...styles.pageContainer, background: 'linear-gradient(135deg, #DE3235, #0093E9)',}}>
        <div style={styles.container}>
          <img src={mentorhublogo} alt="MentorHub Logo" style={styles.logo} /> {/* Add the MentorHub logo here */}
          <div style={styles.contentContainer}>
            <h1 style={styles.heading}>About Us</h1>
            <p style={styles.description}>
              MentorHub is dedicated to connecting students and young adults with industry professionals to provide mentorship, guidance, and support in their career journeys. Our platform aims to bridge the gap between aspiring individuals and experienced professionals, making it easier for students to find internships, research opportunities, and valuable connections.
            </p>
            <h2 style={styles.subheading}>Our Mission</h2>
            <p style={styles.description}>
              Our mission is to empower the next generation by providing them with access to valuable mentorship opportunities, enabling them to reach their full potential and succeed in their chosen career paths.
            </p>
            <h2 style={styles.subheading}>Our Vision</h2>
            <p style={styles.description}>
              Our vision is to create a global community of mentors and mentees who collaborate, learn from each other, and drive positive change in their respective fields.
            </p>
            <h2 style={styles.subheading}>Our Team</h2>
            <div style={styles.teamContainer}>
              <div style={styles.teamMember}>
                <img src="https://media.licdn.com/dms/image/D5603AQEIbgcRzl1AOA/profile-displayphoto-shrink_200_200/0/1694898750748?e=1718236800&v=beta&t=_e8OkrL2rp1iYVUS3myyv6mFWZ4H4bJYEnUdMKqDgWk" alt="Aarsh Patel" style={styles.profilePicture} />
                <h3>Aarsh Patel</h3>
                <p>Role: Co-Founder & CEO</p>
                <p>Year: Sophomore</p>
                <p>Bio: Aarsh is a passionate entrepreneur with a background in technology and business development. He is dedicated to creating innovative solutions that make a positive impact on society.</p>
              </div>
              <div style={styles.teamMember}>
                <img src="https://media.licdn.com/dms/image/D5603AQGQlhvlY_f6qA/profile-displayphoto-shrink_200_200/0/1687362454466?e=1718236800&v=beta&t=aStj6Opx_A6fr0OCcA8uw51ZppUmlbKEb1CZAxKccU4" alt="Thien Le" style={styles.profilePicture} />
                <h3>Thien Le</h3>
                <p>Role: Co-Founder & COO</p>
                <p>Year: Junior</p>
                <p>Bio: Thien is a strategic thinker with a strong background in operations and project management. He is committed to driving organizational growth and efficiency.</p>
              </div>
              <div style={styles.teamMember}>
                <img src="https://media.licdn.com/dms/image/D4E03AQGG1t4cSIM_FQ/profile-displayphoto-shrink_200_200/0/1706745176221?e=1718236800&v=beta&t=xa1-LlrjX2Zhq5T4vQ_B0EXGxqImgjtLbFI7VYdorEY" alt="Maximus Fernandez" style={styles.profilePicture} />
                <h3>Maximus Fernandez</h3>
                <p>Role: Co-Founder & CTO</p>
                <p>Year: Freshman</p>
                <p>Bio: Maximus is a skilled technologist with expertise in software development and systems architecture. He is passionate about leveraging technology to solve complex problems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 200px)', // Adjusted for larger header and footer
  },
  container: {
    flex: 1,
    background: 'white',
    borderRadius: '80px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    maxWidth: '1100px',
    width: '100%',
    textAlign: 'center',
    margin: '0 auto',
    marginTop: '20px',
    marginBottom: '20px',
    padding: '20px',
  },
  contentContainer: {
    padding: '0px',
  },
  heading: {
    fontSize: '1.5rem', // Decreased font size
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '1.2rem', // Decreased font size
    fontWeight: 'bold',
    marginTop: '40px',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1rem', // Decreased font size
    lineHeight: '1.5',
    marginBottom: '20px',
  },
  teamContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
    overflowX: 'auto', // Added to enable horizontal scrolling
  },
  teamMember: {
    maxWidth: '300px',
    marginBottom: '40px',
  },
  profilePicture: {
    width: '150px', // Decreased image size
    height: '150px', // Decreased image size
    borderRadius: '50%',
    marginBottom: '10px',
  },
  logo: {
    width: '200px', // Adjust size as needed
    marginBottom: '20px',
    borderRadius: '50%',
    
  },
};

export default AboutPage;
