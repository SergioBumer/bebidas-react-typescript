import { z } from "zod";
import { CategoriesApiResponseSchema, RecipeApiResponseSchema, RecipeDetailsApiResponseSchema, RecipesApiResponseSchema, SearchFilterSchema } from "../utils/recipes-schemas";

export type Categories = z.infer<typeof CategoriesApiResponseSchema>
export type Recipe = z.infer<typeof RecipeApiResponseSchema>
export type RecipeDetails = z.infer<typeof RecipeDetailsApiResponseSchema>
export type Recipes = z.infer<typeof RecipesApiResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>