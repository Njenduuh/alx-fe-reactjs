import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Ensure Link is imported from react-router-dom

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetching the mock recipe data from the data.json file
    const fetchRecipes = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p className="text-gray-700">{recipe.summary}</p>
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline mt-4 block">
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
