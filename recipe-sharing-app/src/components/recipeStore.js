import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // List of all recipes
  favorites: [], // List of favorite recipe IDs
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [], // List of recommended recipes
  generateRecommendations: () => set(state => {
    // Example recommendation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
