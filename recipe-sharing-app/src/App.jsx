import React from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm'; // Optional

const App = () => {
  return (
    <div className="app">
      <h1>Recipe Sharing Application</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default App;
