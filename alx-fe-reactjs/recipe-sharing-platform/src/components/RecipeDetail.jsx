import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = data.find(r => r.id === parseInt(id));

  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="p-4">
      <img src={recipe.image} alt={recipe.title} className="w-full rounded" />
      <h1 className="text-2xl font-bold mt-4">{recipe.title}</h1>
      <p className="mt-2">{recipe.summary}</p>
      {/* Add additional details like ingredients and steps */}
    </div>
  );
};

export default RecipeDetail;
