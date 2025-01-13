import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div className="recipe-list">
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <Link to={`/recipe/${recipe.id}`} className="recipe-link"> {/* Use Link for navigation */}
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </Link>
          </div>
        ))
      ) : (
        <p>No recipes found matching your search criteria.</p>
      )}
    </div>
  );
};

export default RecipeList;
