import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center py-8">Recipe not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to Home
      </Link>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded mb-6"
        />

        {/* Ingredients Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700">
            {recipe.ingredients ? (
              recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            ) : (
              <li>No ingredients listed.</li>
            )}
          </ul>
        </div>

        {/* Cooking Instructions */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            {recipe.instructions ? (
              recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))
            ) : (
              <li>No instructions provided.</li>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
