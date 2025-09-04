import type { StateCreator } from "zustand";
import { getCategories, searchRecipes } from "../services/RecipeService";
import type { Categories, Recipes, SearchFilter } from "../types";


export type RecipesSliceType = {
  categories: Categories,
  recipes: Recipes
  fetchCategories: () => Promise<void>,
  searchRecipes: (searchFilters: SearchFilter) => Promise<void>
}

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
  categories: {
    drinks: []
  },
  recipes: {
    drinks: []
  },
  fetchCategories: async () => {
    const categories = await getCategories()
    console.log(categories);

    set({
      categories
    })

  }, searchRecipes: async (filters: SearchFilter) => {
    console.log(filters);
    const recipes = await searchRecipes(filters)

    set({
      recipes
    })

  }
})
