import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SocialIcon } from 'react-social-icons';

function ProfilePage() {
  // Initial user data
  const [userData, setUserData] = useState({
    profilePic: 'https://media.licdn.com/dms/image/D5603AQEIbgcRzl1AOA/profile-displayphoto-shrink_200_200/0/1694898750748?e=1718236800&v=beta&t=_e8OkrL2rp1iYVUS3myyv6mFWZ4H4bJYEnUdMKqDgWk', // Increased size of the placeholder image
    name: "Thien Le",
    email: "thienle210303@example.com",
    bio: "Hi there",
    linkedIn: "https://linkedin.com/in/thienle210303",
    github: "https://github.com/thienle210303"
  });

  // State to toggle edit mode
  const [editMode, setEditMode] = useState(false);

  // Handles input changes for user data fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Style objects
  const styles = {
    profileContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      marginTop: '40px', // Increased spacing
      padding: '40px', // Increased padding
      minHeight: 'calc(100vh - 200px)', // Adjusted for larger header and footer
    },
    profileDetails: {
      flex: 3,
      fontSize: '1.5rem', // Increased font size
    },
    profilePicContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
    },
    profilePic: {
      width: '220px', // Increased image size
      height: '220px', // Increased image size
      borderRadius: '50%',
      border: '1px solid black', // Added border
    },
    input: {
      padding: '15px', // Increased padding
      marginBottom: '15px', // Increased spacing
      borderRadius: '5px',
      border: '1px solid #ccc',
      width: '100%', // Full width of parent
      fontSize: '1.5rem', // Increased font size
    },
    button: {
      padding: '15px 30px', // Increased padding
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
      fontSize: '1.5rem', // Increased font size
      marginTop: '15px', // Increased spacing
    },
    // Add more styles as needed
  };

  return (
    <>
      <Navbar />
      <div style={styles.profileContainer}>
        <div style={styles.profileDetails}>
          <h1 style={{ fontSize: '3rem' }}>User Profile</h1> {/* Increased heading size */}
          {editMode ? (
            <>
              {/* Form inputs */}
              <input style={styles.input} type="text" name="name" value={userData.name} onChange={handleInputChange} />
              <input style={styles.input} type="email" name="email" value={userData.email} onChange={handleInputChange} />
              <textarea style={{ ...styles.input, height: '150px' }} name="bio" value={userData.bio} onChange={handleInputChange} />
              <input style={styles.input} type="text" name="linkedIn" value={userData.linkedIn} onChange={handleInputChange} />
              <input style={styles.input} type="text" name="github" value={userData.github} onChange={handleInputChange} />

              {/* Include other social media inputs here */}
              <button style={styles.button} onClick={() => setEditMode(false)}>Save Changes</button>
            </>
          ) : (
            <>
              {/* User details */}
              <p style={{ fontSize: '1.5rem' }}><strong>Name:</strong> {userData.name}</p>
              <p style={{ fontSize: '1.5rem' }}><strong>Email:</strong> {userData.email}</p>
              <p style={{ fontSize: '1.5rem' }}><strong>Bio:</strong> {userData.bio}</p>
              <p style={{ fontSize: '1.5rem' }}><strong>LinkedIn:</strong> <SocialIcon url={userData.linkedIn} target="_blank" rel="noreferrer" /></p>
              <p style={{ fontSize: '1.5rem' }}><strong>Github:</strong> <SocialIcon url={userData.github} target="_blank" rel="noreferrer" /></p>
              <button style={styles.button} onClick={() => setEditMode(true)}>Edit Profile</button>
            </>
          )}
        </div>
        <div style={styles.profilePicContainer}>
          <img src={userData.profilePic} alt="Profile" style={styles.profilePic} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfilePage;
