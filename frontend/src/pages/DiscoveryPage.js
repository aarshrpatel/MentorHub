import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const DiscoveryPage = () => {
  const navigate = useNavigate(); // Use the useNavigate hook

  // Define the list of educational areas
  const areas = [
    "Education",
    "Computer Science",
    "Business",
    "Lifestyle",
    "Technology",
    "Health",
    "Art",
    "Science",
    // Add more areas as needed
  ];

  // Calculate the number of areas per column
  const areasPerColumn = Math.ceil(areas.length / 2);

  // Event handler for the "Hello World" button
  const handleCategorySelect = (category) => {
    navigate(`/mentors/${category}`); // Navigate to the mentors page with the selected category
  };

  return (
    <>
    <div>
      <NavBar />
      <div style={{ textAlign: 'center', margin: '20px', minHeight: '85vh' }}>
        <h1 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>Discovery</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px 10px', justifyContent: 'center' }}>
          {areas.map((area, index) => (
            <button 
              onClick={() => handleCategorySelect(area)} // Call the event handler when the button is clicked 
              style={{
                padding: '15px 20px',
                borderRadius: '30px',
                backgroundColor: '#5667E5',
                color: 'white',
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer',
                width: '100%',
                fontWeight: 'bold',
                height: '100px',
              }}
            >
              {area}
              {/* Display the filter icon */}
            </button>
          ))}
        </div>
        
        <hr style={{ margin: '20px auto', width: '80%', border: '1px solid #ddd' }} />
        <div style={{ textAlign: 'center', marginTop: '20px' }}>You can choose any field you want to learn from on this page!</div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default DiscoveryPage;