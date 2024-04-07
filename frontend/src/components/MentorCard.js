import React from 'react';

function MentorCard({ mentor }) {
  return (
    <motion.div
      style={styles.card}
      variants={cardVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.3 }}
    >
        <div style={styles.card}>
        <h3>{mentor.name}</h3>
        <p>{mentor.bio}</p>
        {/* Add more mentor details here */}
        </div>
    </motion.div>
  );
}

const styles = {
    card: {
      background: '#fff',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
      ':hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)',
      },
    },
    // Add more styles for inner elements
  };

export default MentorCard;
