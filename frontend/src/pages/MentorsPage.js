import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import MentorList from '../components/MentorList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MentorsPage() {
  const [mentors, setMentors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('/api/mentors')
      .then(response => setMentors(response.data))
      .catch(error => console.error('Error fetching mentors:', error));
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const getFilteredMentors = () => {
    return mentors.filter(mentor =>
      mentor.name.toLowerCase().includes(searchQuery) ||
      mentor.bio.toLowerCase().includes(searchQuery) // Add more conditions as needed
    );
  };

  return (
    <div style={styles.container}>
        <Navbar />
        <div style={styles.page}>
        <SearchBar onSearch={handleSearch} />
        <MentorList mentors={getFilteredMentors()} />
        </div>
        <Footer />
    </div>
  );
}


const styles = {
    page: {
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
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
    // Add more styles as needed
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
    }
};

export default MentorsPage;
