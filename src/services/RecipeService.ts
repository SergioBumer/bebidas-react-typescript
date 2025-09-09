import axios from "axios";
import {
  CategoriesApiResponseSchema,
  RecipeDetailsApiResponseSchema,
  RecipesApiResponseSchema,
} from "../utils/recipes-schemas";
import type { SearchFilter } from "../types";

export const getCategories = async () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

  const { data } = await axios(url);
  const result = CategoriesApiResponseSchema.safeParse(data);
  if (result.success) {
    return result.data;
  }
};

export const searchRecipes = async (searchFilters: SearchFilter) => {
  const urlByName = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchFilters.category}&i=${searchFilters.ingredient}`;

  const { data } = await axios(urlByName);
  const result = RecipesApiResponseSchema.safeParse(data);
  if (result.success) {
    return result.data;
  }
};

export const searchRecipe = async (id: string) => {
  const urlByName = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  const { data } = await axios(urlByName);
  const result = RecipeDetailsApiResponseSchema.safeParse(data?.drinks[0]);
  if (result.success) {
    console.log(result.data);

    return result.data;
  }
};
