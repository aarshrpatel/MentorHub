import React from 'react';
import { useState } from 'react';

function SearchBar({ onSearch, onButtonClick }) {
    const [inputValue, setInputValue] = useState('');
  
    return (
      <div>
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
  searchBar: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    fontSize: '16px',
  },

  button: {
    cursor: 'pointer',
    padding: '10px',
    margin: '5px',
  }
};

export default SearchBar;
