import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // List of all recipes
  searchTerm: '', // Current search term
  filteredRecipes: [], // Filtered recipes based on search

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe].filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Update the search term
  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    })),

  // Reset filtered recipes when search term is empty
  resetFilter: () =>
    set((state) => ({
      filteredRecipes: state.recipes,
    })),
}));

export default useRecipeStore;
