import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import RegistrationForm  from './Components/RegistrationForm';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
};

export default App;
