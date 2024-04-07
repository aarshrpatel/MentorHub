import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import MentorList from '../components/MentorList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MentorsPage() {
  const { category } = useParams(); // Get the category from URL params
  const [mentors, setMentors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);

  useEffect(() => {
    axios.get('/api/mentors')
      .then(response => setMentors(response.data))
      .catch(error => console.error('Error fetching mentors:', error));
  }, []);

  const handleSearchChange = (query) => {
    setSearchQuery(query.toLowerCase());
    setSearchPerformed(false); // Reset search performed flag on query change
  };

  const performSearch = () => {
    setSearchPerformed(true); // Set flag to true when search is performed
  };

  const getFilteredMentors = () => {
    if (!searchPerformed) return mentors; // Return all mentors if no search performed
    return mentors.filter(mentor =>
      mentor.name.toLowerCase().includes(searchQuery) ||
      mentor.bio.toLowerCase().includes(searchQuery)
    );
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <h2 style={styles.h2}>Mentors</h2>
      {/* Dedicated container for SearchBar to ensure it takes full width */}
      <div style={styles.searchContainer}>
        <SearchBar onSearch={handleSearchChange} onButtonClick={performSearch} />
      </div>
      {/* MentorList is now directly under container, so it naturally follows SearchBar */}
      <MentorList mentors={getFilteredMentors()} />
      <Footer />
    </div>
  );
}


const styles = {
  h2: {
    textAlign: 'left',
    fontSize: '36px',
    margin: '20px',
  },
  searchContainer: {
    padding: '0 20px', // Adjust padding as needed
    marginBottom: '20px', // Space between search bar and list
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    overflowX: 'hidden', // Prevent horizontal scroll
  },
};


  

export default MentorsPage;
