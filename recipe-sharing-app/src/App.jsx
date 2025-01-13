import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing necessary modules for routing
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails'; // Import RecipeDetails for the individual recipe view

const App = () => {
  return (
    <Router>
      <div className="app">
        <h1>Recipe Sharing Application</h1>
        <SearchBar /> {/* Search bar for filtering recipes */}
        <Routes>
          {/* Route for displaying the recipe list */}
          <Route path="/" element={<RecipeList />} />

          {/* Route for displaying individual recipe details based on the recipe ID */}
          <Route path="/recipe/:id" element={<RecipeDetails />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
