import React, { useState } from 'react';

const style = {
  Container: {
    flexGrow: 1,
    width: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    display: 'flex',
    padding: '10px 0 10px 0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    paddingTop: '5px',
    display: 'inline-flex',
    width: '95%',
    maxWidth: '100%',
    backgroundColor: 'white'
  },
};

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
<<<<<<< Updated upstream
    <Container expand='lg' className='d-flex justify-content-center align-items-center' style={style.Container}> {/* Set height to 100vh */}
        <h2 className="text-center mb-4" style={{ fontSize: '2rem' }}>Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicUsername" className="mb-4">
            <Form.Label style={{ fontSize: '1.25rem' }}>Username:</Form.Label>
            <Form.Control
=======
    <div style={style.Container}>
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '1rem' }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ fontSize: '1.25rem', display: 'block' }}>Username:</label>
            <input
>>>>>>> Stashed changes
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ fontSize: '1.25rem', padding: '1rem', marginBottom: '0.5rem', marginTop: '0.5rem', width: '100%', borderRadius: '0.5rem'}}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ fontSize: '1.25rem', display: 'block' }}>Password:</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ fontSize: '1.25rem', padding: '1rem', marginBottom: '0', marginTop: '0.5rem',
               width: '100%', borderRadius: '0.5rem', alignItems: 'center'
                }}
            />
          </div>

          <button
            type="submit"
            disabled={!isLoginEnabled()} // Disable button when username or password is empty
            style={{ fontSize: '1.5rem', padding: '1rem', marginTop: '2rem', backgroundColor: '#007bff', borderColor: '#007bff', borderRadius: '0.5rem', width: '100%'}}
          >
            Login
<<<<<<< Updated upstream
          </Button>
        </Form>
    </Container>
=======
          </button>
        </form>
      </div>
    </div>
>>>>>>> Stashed changes
  );
};

export default LoginPage;
