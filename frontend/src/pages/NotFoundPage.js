import React from 'react';
import Footer from '../components/Footer';

function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Footer />
    </div> 
  );
}

export default NotFoundPage;
