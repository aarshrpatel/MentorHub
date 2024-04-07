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
    axios.get('/api/mentors/category/${category}')
      .then(response => setMentors(response.data))
      .catch(error => console.error('Error fetching mentors:', error));
  }, [category]);

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
      <div style={styles.page}>
        <SearchBar onSearch={handleSearchChange} onButtonClick={performSearch} />
        <MentorList mentors={getFilteredMentors()} />
      </div>
      <Footer />
    </div>
  );
}

const styles = {
    h2: {
      textAlign: 'left',
      fontSize: '36px',
      margin: '20px 20px',
    },
    page: {
      padding: '20px',
      maxWidth: '1200px',
      margin: '0',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '20px',
    },
    searchBar: {
      width: '100%',
      padding: '15px 20px',
      fontSize: '18px',
      border: '2px solid #007bff',
      borderRadius: '25px',
      marginBottom: '30px',
      outline: 'none',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    // Add more styles as needed
  };
  

export default MentorsPage;
