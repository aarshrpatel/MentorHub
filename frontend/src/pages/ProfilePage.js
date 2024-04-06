import React, { useState } from 'react';

function ProfilePage() {
  // Initial user data
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Enthusiastic developer and lifelong learner."
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
  
  // Styling objects
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  };
  
  const inputStyle = {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '300px',
  };
  
  const buttonStyle = {
    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  };
  
  const textStyle = {
    marginBottom: '10px',
  };

  return (
    <div style={containerStyle}>
      <h1>User Profile</h1>
      {editMode ? (
        <>
          <input
            style={inputStyle}
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
          />
          <input
            style={inputStyle}
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
          <textarea
            style={{ ...inputStyle, height: '100px' }}
            name="bio"
            value={userData.bio}
            onChange={handleInputChange}
          />
          <button style={buttonStyle} onClick={() => setEditMode(false)}>Save</button>
        </>
      ) : (
        <>
          <div style={textStyle}><strong>Name:</strong> {userData.name}</div>
          <div style={textStyle}><strong>Email:</strong> {userData.email}</div>
          <div style={textStyle}><strong>Bio:</strong> {userData.bio}</div>
          <button style={buttonStyle} onClick={() => setEditMode(true)}>Edit Profile</button>
        </>
      )}
    </div>
  );
}

export default ProfilePage;
