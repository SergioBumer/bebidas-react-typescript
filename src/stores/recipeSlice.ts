import type { StateCreator } from "zustand";
import { getCategories, searchRecipe, searchRecipes } from "../services/RecipeService";
import type { Categories, Recipe, RecipeDetails, Recipes, SearchFilter } from "../types";
import type { FavoritesSliceType } from "./favoritesSlice";


export type RecipesSliceType = {
  categories: Categories,
  recipes: Recipes,
  recipeDetail: RecipeDetails,
  fetchCategories: () => Promise<void>,
  searchRecipes: (searchFilters: SearchFilter) => Promise<void>,
  selectRecipe: (id: Recipe['idDrink']) => Promise<void>,
  showModal: boolean,
  closeModal: () => Promise<void>
}

export const createRecipesSlice: StateCreator<RecipesSliceType & FavoritesSliceType, [], [], RecipesSliceType> = (set) => ({
  categories: {
    drinks: []
  },
  recipes: {
    drinks: []
  },
  recipeDetail: {
    idDrink: '',
    strDrink: '',
    strDrinkThumb: '',
    strInstructions: '',
    strIngredient1: '',
    strIngredient2: '',
    strIngredient3: '',
    strIngredient4: '',
    strIngredient5: '',
    strIngredient6: '',
    strMeasure1: '',
    strMeasure2: '',
    strMeasure3: '',
    strMeasure4: '',
    strMeasure5: '',
    strMeasure6: '',
  },
  fetchCategories: async () => {
    const categories = await getCategories()

    set({
      categories
    })

  }, searchRecipes: async (filters: SearchFilter) => {
    const recipes = await searchRecipes(filters)

    set({
      recipes
    })

  }, selectRecipe: async (drinkId: string) => {
    const recipeDetail = await searchRecipe(drinkId)
    
    set({
      recipeDetail,
      showModal: true
    })
    
  },
  showModal: false,
  closeModal: async() => {
    set({
      showModal: false,
      recipeDetail: {} as RecipeDetails
    })
  }
})
