import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'black', padding: '30px', color: 'white' }}>
      <Link to="/" style={{ fontWeight: 'bold' }}>Kalvium❤️</Link>

      <div style={{ float: 'right' }}>
        
        <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
        <Link to="/RegistrationForm" style={{ margin: '0 10px' }}>Registration Form</Link>
      </div>
    </nav>
  );
};

export default Navbar;

// 