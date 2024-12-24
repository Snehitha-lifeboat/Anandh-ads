import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ClientDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const userConfirmed = window.confirm('Are you sure you want to logout?');
    if (userConfirmed) {
      navigate('/Login');
    }
  };

  return (
    <div style={styles.container}>
     
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Dashboard</h2>
        <ul style={styles.sidebarList}>
          <li style={styles.sidebarItem}><Link to="/clients" style={styles.sidebarLink}>Clients</Link></li>
         
        </ul>
      </div>

      
      <div style={styles.mainContent}>
   
        <div style={styles.navbar}>
          <h1 style={styles.navbarTitle}>Client platform </h1>
          <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
        </div>

  
        <h2 style={styles.heading}>Client Platform Dashboard</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h2>Clients</h2>
            <p>Manage all registered students.</p>
            <Link to="/Clients" style={styles.link}>Go to Clients</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  sidebar: {
    width: '200px',
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '20px',
    position: 'fixed',
    top: '0',
    left: '0',
    bottom: '0',
  },
  sidebarTitle: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  sidebarList: {
    listStyleType: 'none',
    padding: 0,
  },
  sidebarItem: {
    marginBottom: '10px',
  },
  sidebarLink: {
    color: 'white',
    textDecoration: 'none',
  },
  mainContent: {
    marginLeft: '220px',
    padding: '20px',
    flexGrow: 1,
    overflowY: 'auto',
  },
  navbar: {
    backgroundColor: '#3e8e41',
    color: 'white',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    width: 'calc(100% - 220px)',
    top: '0',
    left: '220px',
    zIndex: 1,
  },
  navbarTitle: {
    fontSize: '24px',
  },
  logoutButton: {
    backgroundColor: 'transparent',
    color: 'white',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  },
  heading: {
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  card: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  link: {
    display: 'inline-block',
    marginTop: '10px',
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};

export default ClientDashboard;
