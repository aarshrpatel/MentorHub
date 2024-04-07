import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import MentorList from '../components/MentorList';
import { SocialIcon } from 'react-social-icons';

function DashboardPage() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    axios.get('/api/recommendations')
      .then(response => setMentors(response.data))
      .catch(error => console.error('Error fetching mentors:', error));
  }, []);

  const getMentors = () => {
    return mentors;
  };

  const [userData, setUserData] = useState(() => {
    const storedData  = localStorage.getItem('currentUser');
    return storedData ? JSON.parse(storedData) : {
      profilePicture: 'https://media.licdn.com/dms/image/D5603AQEIbgcRzl1AOA/profile-displayphoto-shrink_200_200/0/1694898750748?e=1718236800&v=beta&t=_e8OkrL2rp1iYVUS3myyv6mFWZ4H4bJYEnUdMKqDgWk', // Increased size of the placeholder image
      firstName: "Thien",
      lastName: "Le",
      email: "thienle210303@example.com",
      bio: "Hi there",
      linkedin: "https://linkedin.com/in/thienle210303",
      github: "https://github.com/thienle210303"
    };
  });

  userData.name = userData.firstName + " " + userData.lastName;

  return (
    <div style={styles.pageContainer}>
      <Navbar />

      {/* Dashboard Container */}
      <div style={styles.dashboardContainer}>
        {/* Dashboard Text */}
        <div style={styles.dashboardTextContainer}>
          <h1 style={styles.title}>Dashboard</h1>
          <p style={styles.centerText}>Welcome to your Dashboard!</p> {/* Centered text */}
          <p style={styles.centerText}>This is a protected area of the application.</p> {/* Centered text */}
        </div>
      </div>

      {/* Recommended Box */}
      <div style={styles.centered}>
        <div style={styles.recommendedContainer}>
          <h2 style={styles.recommendedTitle}>Recommended Mentors</h2> {/* Updated text here */}
          <MentorList mentors={getMentors()} />
        </div>
      </div>

      {/* Profile Container */}
      <div style={styles.profileContainer}>
        <h2>Your Profile</h2>
        <img src={userData.profilePicture} alt="Profile" style={styles.profilePicture} />
        <p style={styles.name}><strong>Name:</strong> {userData.name}</p>
        <p style={styles.email}><strong>Email:</strong> {userData.email}</p>
      </div>

      <Footer />
    </div>
  );
}

const styles = {
  pageContainer: {
    background: '#DEE3E0',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  dashboardContainer: {
    display: 'flex',
    justifyContent: 'left', // Centered horizontally
    alignItems: 'center', // Centered vertically
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: '15%',
    width: '100%', // Full width
  },
  title: {
    color: '#333',
    margin: '0', // Removed margin to ensure proper alignment
  },
  profileContainer: {
    position: 'fixed', // Positioning set to fixed
    marginTop: '120px', // Adjusted top position
    right: '40px', // Adjusted right position
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    width: '15%',
    height: '20%', // Adjusted height
    background: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '200px', // Adjusted height
    minWidth: '250px', // Adjusted width
  },
  profilePicture: {
    width: '100px', // Adjusted size
    height: '100px', // Adjusted size
    borderRadius: '50%',
    border: '1px solid black', // Added border
  },
  name: {
    fontSize: '1rem',
    marginBottom: '5px', // Reduced margin
  },
  email: {
    fontSize: '1rem',
    marginTop: '5px', // Reduced margin
  },
  dashboardTextContainer: {
    padding: '20px',
    textAlign: 'center', // Centered text
  },
  centered: {
    display: 'flex',
    justifyContent: 'left', // Centered horizontally
    margin: '10px',
    marginBottom: '20px', // Added margin to prevent overlap with the footer
  },
  recommendedContainer: {
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    width: '60vw', // Adjusted width //'fit-content' also works
    height: '500px', // Adjusted height
    background: '#FFFFFF',
    textAlign: 'left', // Centered text
  },
  recommendedContent: {
    display: 'flex',
    flexDirection: 'column', // Vertical list
    alignItems: 'left', // Centered horizontally
  },
  recommendedTitle: {
    padding: '10px',
    fontStyle: 'italic',
  },
  circularImageContainer: {
    textAlign: 'center',
  },
  circularImage: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '1px solid black', // Added border
  },
  centerText: {
    textAlign: 'center',
  },
};

export default DashboardPage;
