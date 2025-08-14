import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useRecipeStore } from './components/recipeStore';
import RecipeDetails from './components/RecipeDetails';

const Home = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} className="mb-2">
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500 underline">
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;