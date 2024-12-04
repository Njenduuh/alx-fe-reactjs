import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <button
        onClick={() => navigate('/')}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-6 hover:bg-blue-600"
      >
        Back to Home
      </button>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-60 object-cover rounded-md mb-6"
        />

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-700">Ingredients</h2>
            <ul className="list-disc pl-5 space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-600">{ingredient}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-700">Cooking Instructions</h2>
            <ol className="list-decimal pl-5 space-y-2">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="text-gray-600">{step}</li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
