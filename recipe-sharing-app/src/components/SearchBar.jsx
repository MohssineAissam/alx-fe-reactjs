import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const searchTerm = useRecipeStore((s) => s.searchTerm);
  const setSearchTerm = useRecipeStore((s) => s.setSearchTerm);
  const filterRecipes = useRecipeStore((s) => s.filterRecipes);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    filterRecipes(); // trigger filtering whenever term updates
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Search recipes..."
      className="border p-2 w-full max-w-md"
    />
  );
};

export default SearchBar;