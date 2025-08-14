import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{recipe.title}</h1>
      <p className="mt-2">{recipe.description}</p>

      <div className="mt-4">
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton id={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetails;