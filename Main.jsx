import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import ClientForm from "./ClientForm";
import ClientTable from "./ClientTable";
import ClientDashboard from "./ClientDashboard";

const Main = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/*" element={<Clients />} />
    </Routes>
  </Router>
);

const Clients = () => {
  const [activeItem, setActiveItem] = useState("Clients");
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate(); 

  const menuItems = ["Clients"];

  const handleMenuClick = (item) => setActiveItem(item);
  const handleMouseEnter = (item) => setHoveredItem(item);
  const handleMouseLeave = () => setHoveredItem(null);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      navigate("/"); 
    }
  };

  return (
    <div style={layoutStyles.container}>
     
      <div style={layoutStyles.navbar}>
        <h1 style={layoutStyles.navbarTitle}>Client Management Dashboard</h1>
      
        <button onClick={handleLogout} style={layoutStyles.logoutButton}>
          <span style={layoutStyles.logoutIcon}>🔒</span> 
        </button>
      </div>

 
      <div style={layoutStyles.sidebar}>
        <ul style={layoutStyles.menu}>
          {menuItems.map((item) => (
            <li
              key={item}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={`/${item}`}
                style={{
                  ...layoutStyles.link,
                  ...(activeItem === item ? layoutStyles.activeLink : {}),
                  ...(hoveredItem === item ? layoutStyles.hoverLink : {}),
                }}
                onClick={() => handleMenuClick(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    
      <div style={layoutStyles.content}>
        <Routes>
          <Route path="/Clients" element={<ClientTable />} />
          <Route path="/Client-form" element={<ClientForm />} />
        </Routes>
      </div>
    </div>
  );
};

const layoutStyles = {
  container: { display: "flex", height: "100vh", overflow: "hidden",  },


 
  navbar: {
    backgroundColor: "black",
    color: "white",
    width: "100%",
    padding: "10px 20px",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    
    justifyContent: "space-between", 
  },
  navbarTitle: {
    margin: 0,
    textAlign: "center", 
    flex: 1,
    fontSize: "24px",
  },
  
 
  logoutButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    padding: "5px 10px",
    display: "flex",
   
    alignItems: "center",
  },
  logoutIcon: {
    marginRight: "15px",
  },


  sidebar: {
    width: "200px",
    padding: "30px",
    backgroundColor: "black",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    height: "100vh",
    position: "fixed",
    top: "40px",  // Adjusted to avoid overlap with navbar
    left: 0,
     borderTopRightRadius: "20px",  
    borderBottomRightRadius: "20px"
   
  },

  content: {
    marginLeft: "250px",
    padding: "30px",
    width: "calc(100% - 250px)",
    height: "100vh",
    overflowY: "auto",
    backgroundColor: "#fff",
    marginTop: "60px",  
  },

 
  menu: { listStyleType: "none", padding: 0, margin: 0 },
  link: {
    display: "block",
    margin: "10px 0",
    textDecoration: "none",
    color: "#228B22",
    fontSize: "18px",
    fontWeight: "bold",
    padding: "5px 10px",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
  activeLink: { backgroundColor: "red", color: "#fff" },
  hoverLink: { backgroundColor: "#007bff", color: "#fff" },
};

export default Main;
