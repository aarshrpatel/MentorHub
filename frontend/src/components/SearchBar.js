import React, { useState } from 'react';


function SearchBar({ onSearch, onButtonClick }) {
    const [inputValue, setInputValue] = useState('');
  
    return (
      <div style={styles.container}> {/* Apply flexbox styling here */}
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          style={styles.searchBar}
          placeholder="Search mentors..."
        />
        <button onClick={() => onButtonClick(inputValue)} style={styles.button}>Search</button>
      </div>
    );
}

const styles = {
  container: {
    display: 'flex', // Use flexbox to align children horizontally
    alignItems: 'center', // Align items vertically in the center
    marginBottom: '20px', // Moved from searchBar to container to maintain vertical spacing
    width: '50vw', // Set a width to prevent the search bar from taking up the full width
    minWidth: '300px', // Set a minimum width to prevent the search bar from shrinking too much
  },
  searchBar: {
    flexGrow: 1, // Allow the search bar to fill the space
    padding: '10px',
    fontSize: '16px',
    marginRight: '5px', // Add some space between the search bar and the button
    border: '2px solid #ccc', // Optional: adds a border around the input
    borderRadius: '5px', // Optional: rounds the corners of the input
  },
  button: {
    cursor: 'pointer',
    padding: '10px 15px', // Adjust padding to better match the input's height
    border: '2px solid #007bff', // Match the input's border style
    borderRadius: '5px', // Match the input's border-radius
    background: '#007bff', // Example button color
    color: 'white', // Text color for the button
    fontSize: '16px', // Match the input's font size
  }
};

export default SearchBar;