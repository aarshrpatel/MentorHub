import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const DiscoveryPage = () => {
  // Define the list of educational areas
  const areas = [
    "Education",
    "Career",
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
  const handleClick = () => {
    alert("Hello World!");
  };

  return (
    <>
    <div>
      <NavBar />
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h1 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>Discovery</h1>
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ flex: '1', marginRight: '10px' }}>
            <input type="text" placeholder="Search" style={{ padding: '10px', width: '90%' }} />
          </div>
          <div>
            
            <button 
              onClick={handleClick} 
              style={{ 
                padding: '10px', 
                backgroundColor: '#5B5D6D', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px',
                cursor: 'pointer' // Change cursor to pointer
              }}
            >
              {/* Display the filter icon */}
              Filter Results
            </button>
          </div>
        </div>
        <hr style={{ margin: '20px auto', width: '80%', border: '1px solid #ddd' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px 10px', justifyContent: 'center' }}>
          {areas.map((area, index) => (
            <button
              key={index}
              style={{
                padding: '15px 20px',
                borderRadius: '30px',
                backgroundColor: '#5667E5', // Example color
                color: 'white',
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer', // Change cursor to pointer
                width: '100%', // Set button width
                fontWeight: 'bold', // Make text bold
              }}
            >
              {area}
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