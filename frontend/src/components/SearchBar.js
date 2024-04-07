import React from 'react';

function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      onChange={(e) => onSearch(e.target.value)}
      style={styles.searchBar}
      placeholder="Search mentors..."
    />
  );
}

const styles = {
  searchBar: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    fontSize: '16px',
  }
};

export default SearchBar;
