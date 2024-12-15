// src/components/Search.js

import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState(''); // Store the search input
  const [userData, setUserData] = useState(null); // Store the fetched user data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Handle input change
  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  // Handle form submission
  const handleSearchSubmit = async (event) => {
    event.preventDefault(); // Prevent the page from refreshing
    setLoading(true); // Set loading state to true

    try {
      const data = await fetchUserData(username); // Fetch user data
      setUserData(data); // Store the fetched data
      setError(null); // Clear any previous errors
    } catch (error) {
      setError('Looks like we cant find the user'); // Set error state
      setUserData(null); // Clear user data on error
    } finally {
      setLoading(false); // Set loading state to false after the API call
    }
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && !loading && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <h2>{userData.name}</h2>
          <p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
