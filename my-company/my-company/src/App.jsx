// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';       // Import your Home component
import About from './About';     // Import your About component
import Services from './Services'; // Import your Services component
import Contact from './Contact'; // Import your Contact component

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation bar would go here (optional) */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
