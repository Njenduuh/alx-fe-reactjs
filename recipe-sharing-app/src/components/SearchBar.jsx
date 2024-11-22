import React from 'react';
import { useRecipeStore } from '../recipeStore'; // Update the path as necessary

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Update the search term
    filterRecipes(); // Trigger filtering
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearch}
      style={{ padding: '8px', marginBottom: '16px', width: '100%' }}
    />
  );
};

export default SearchBar;
