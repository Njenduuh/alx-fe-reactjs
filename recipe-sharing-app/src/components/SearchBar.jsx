import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search recipes by title..."
        onChange={handleChange}
        className="search-bar"
      />
    </div>
  );
};

export default SearchBar;
