import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const filteredRecipes = recipes
    .filter((recipe) => {
      const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .map((recipe) => (
      <div key={recipe.id} className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
        <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-900">{recipe.title}</h2>
          <p className="text-gray-600 mt-2">{recipe.summary}</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            View Recipe
          </button>
        </div>
      </div>
    ));

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Recipe Sharing Platform</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Category Filter */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="p-2 border rounded mb-4"
      >
        <option>All</option>
        <option>Italian</option>
        <option>Indian</option>
        <option>American</option>
      </select>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredRecipes.length > 0 ? (
          filteredRecipes
        ) : (
          <p className="col-span-3 text-center text-gray-500">No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
