import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes); // Use filteredRecipes from Zustand store

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>
              {/* Use Link to navigate to the RecipeDetails page */}
              <Link to={`/recipe/${recipe.id}`}>
                {recipe.title}
              </Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
