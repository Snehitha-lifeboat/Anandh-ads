import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

  
  

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = { username, password };

    try {
      const response = await fetch("https://api.dhuniya.in/userservice/testlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage('Login successful!');
        console.log(data);
        setTimeout(() => {
          navigate("/ClientDashboard");  // Use navigate() to go to the ClientDashboard route
        }, 2000);
      } else {
        const error = await response.json();
        alert(error.message || "Login failed! Please check your credentials.");
      }
    } catch (error) {
      alert("An error occurred! Please try again.");
      console.error(error);
    }
  };

  return (
    <div style={styles.loginContainer}>
      <nav style={styles.navbar}>
        <h1 style={styles.navbarTitle}>Client Management Dashboard</h1>
     
      </nav>
      <div style={styles.formContainer}>
        <h1 style={styles.header}>Login</h1>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="username" style={styles.label}>Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Login</button>
        </form>
        {successMessage && <div style={styles.successMessage}>{successMessage}</div>}
      </div>
    </div>
  );
}

const styles = {
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    background: 'linear-gradient(to bottom right, red, white)',
    color: 'white',
  },
  navbar: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: "black",
    padding: '10px 20px',
    width: '120%',
    position: 'fixed',
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  navbarTitle: {
    color: 'white',
    margin: 0,
  },
  formContainer: {
    background: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px black',
    textAlign: 'center',
    width: '300px',
    color: 'black',
  },
  header: {
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
  },
  formGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  successMessage: {
    marginTop: '15px',
    color: 'green',
    fontSize: '14px',
  },
};

export default Login;