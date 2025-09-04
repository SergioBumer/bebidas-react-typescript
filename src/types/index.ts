import { z } from "zod";
import { CategoriesApiResponseSchema, RecipesApiResponseSchema, SearchFilterSchema } from "../utils/recipes-schemas";

export type Categories = z.infer<typeof CategoriesApiResponseSchema>
export type Recipes = z.infer<typeof RecipesApiResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>