import { useRecipeStore } from './recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const { favorites, addFavorite, removeFavorite } = useRecipeStore();
  const isFavorite = favorites.includes(recipeId);

  return (
    <button
      onClick={() =>
        isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId)
      }
      className={`px-3 py-1 rounded ${
        isFavorite ? 'bg-red-500 text-white' : 'bg-gray-200'
      }`}
    >
      {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;
