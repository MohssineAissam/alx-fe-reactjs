import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault(); // exact match for test
    updateRecipe({ ...recipe, title, description });
    alert('Recipe updated!');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-2">
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="border p-2 w-full"
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        className="border p-2 w-full"
        placeholder="Description"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Save
      </button>
    </form>
  );
};

export default EditRecipeForm;