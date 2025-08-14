import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const searchTerm = useRecipeStore((s) => s.searchTerm);
  const recipes = useRecipeStore((s) =>
    s.filteredRecipes.length || searchTerm ? s.filteredRecipes : s.recipes
  );

  return (
    <div className="mt-4 space-y-3">
      {recipes.length === 0 ? (
        <p>No recipes match your search.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} className="border p-3 rounded">
            <h3 className="font-semibold">{recipe.title}</h3>
            <p className="text-sm text-gray-600">{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;