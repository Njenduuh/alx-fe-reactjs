import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    display: 'flex',               // Ensure display is flex for layout
    justifyContent: 'space-around', // Space out the links evenly
    backgroundColor: '#333',       // Add background color for better visuals
    padding: '10px',               // Add some padding
    color: 'white',                // Text color
  };

  const linkStyle = {
    color: 'white',                // Link text color
    textDecoration: 'none',        // Remove underline
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;
