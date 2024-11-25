// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/profile">Go to Profile</Link> | 
        <Link to="/post/1">View Post 1</Link> | 
        <Link to="/post/2">View Post 2</Link>
      </nav>
    </div>
  );
};

export default Home;
