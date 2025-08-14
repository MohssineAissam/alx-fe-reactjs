import { create } from 'zustand';

export const useRecipeStore = create((set) => ({

  recipes: [
    { id: 1, title: 'Spaghetti', description: 'Classic Italian pasta.' },
    { id: 2, title: 'Pancakes', description: 'Fluffy breakfast treat.' },
    { id: 3, title: 'Chicken Curry', description: 'Spicy and savory.' },
  ],


  searchTerm: '',
  filteredRecipes: [],


  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () =>
    set((state) => {
      const term = state.searchTerm.trim().toLowerCase();
      const list = term
        ? state.recipes.filter((r) =>
            r.title.toLowerCase().includes(term)
          )
        : state.recipes;
      return { filteredRecipes: list };
    }),


  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
 
      filteredRecipes: state.searchTerm
        ? [...state.recipes, recipe].filter((r) =>
            r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
          )
        : [...state.recipes, recipe],
    })),

  updateRecipe: (updated) =>
    set((state) => {
      const next = state.recipes.map((r) => (r.id === updated.id ? updated : r));
      const filtered = state.searchTerm
        ? next.filter((r) =>
            r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
          )
        : next;
      return { recipes: next, filteredRecipes: filtered };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const next = state.recipes.filter((r) => r.id !== id);
      const filtered = state.searchTerm
        ? next.filter((r) =>
            r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
          )
        : next;
      return { recipes: next, filteredRecipes: filtered };
    }),
}));
