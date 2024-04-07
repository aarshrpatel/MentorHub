import React from 'react';
import MentorCard from './MentorCard';

function MentorList({ mentors }) {
  return (
    <div style={styles.list}>
      {mentors.map(mentor => (
        <MentorCard key={mentor.id} mentor={mentor} />
      ))}
    </div>
  );
}

const styles = {
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  }
};

export default MentorList;