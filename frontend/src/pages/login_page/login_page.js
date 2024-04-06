import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';

const LoginPage = () => {
  // State variables to store the username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to handle login authentication
    console.log('Username:', username);
    console.log('Password:', password);
    // For now, let's just clear the input fields
    setUsername('');
    setPassword('');
  };

  // Function to check if both username and password are entered
  const isLoginEnabled = () => {
    return username.trim() !== '' && password.trim() !== '';
  };

  return (
    <Container fluid className="h-100 d-flex justify-content-center align-items-center"> {/* Set height to 100vh */}
      <div
        className="bg-white p-5 rounded shadow"
        style={{ width: '100%', maxWidth: '1000px' }}
      >
        <h2 className="text-center mb-4" style={{ fontSize: '2rem' }}>Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicUsername" className="mb-4">
            <Form.Label style={{ fontSize: '1.25rem' }}>Username:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              size="lg"
              style={{ fontSize: '1.25rem', padding: '1rem', marginBottom: '0.5rem', marginTop: '0.5rem', width: '100%', borderRadius: '0.5rem'}}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-4">
            <Form.Label style={{ fontSize: '1.25rem' }}>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="lg"
              style={{ fontSize: '1.25rem', padding: '1rem', marginBottom: '0', marginTop: '0.5rem',
               width: '100%', borderRadius: '0.5rem', alignItems: 'center'
                }}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            size="lg"
            block
            disabled={!isLoginEnabled()} // Disable button when username or password is empty
            style={{ fontSize: '1.5rem', padding: '1rem', marginTop: '2rem', backgroundColor: '#007bff', borderColor: '#007bff', borderRadius: '0.5rem', width: '100%'}}
          >
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default LoginPage;
