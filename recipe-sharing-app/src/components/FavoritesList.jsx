import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const { recipes, favorites } = useRecipeStore();
  const favoriteRecipes = favorites
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter(Boolean);

  return (
    <div className="p-4 bg-yellow-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id} className="mb-2">
            <h3 className="font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;