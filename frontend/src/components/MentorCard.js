import React from 'react';
import { motion } from 'framer-motion';

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
          <h3>{mentor.firstName} {mentor.lastName}</h3>
          <p>{mentor.area}</p>
          <p>{mentor.rating} out of 5 stars</p>
        </div>
    </motion.div>
  );
}

const cardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    in: { opacity: 1, scale: 1 },
    out: { opacity: 0, scale: 0.9 },
  };

const styles = {
    card: {
      background: '#fff',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
      ':hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 10px 15px linear-gradient(135deg, #DE3235, #0093E9)',
      },
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
    },
    // Add more styles for inner elements
  };

export default MentorCard;
