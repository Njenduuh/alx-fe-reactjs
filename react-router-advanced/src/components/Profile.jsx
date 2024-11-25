// src/pages/Profile.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details">Profile Details</Link> | 
        <Link to="settings">Profile Settings</Link>
      </nav>
      <Outlet /> {/* This renders the nested route component */}
    </div>
  );
};

export default Profile;
