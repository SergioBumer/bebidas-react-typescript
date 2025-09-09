import { z } from "zod";

export const CategoriesApiResponseSchema = z.object({
  drinks: z.array(
    z.object({
      strCategory: z.string(),
    })
  ),
});

export const RecipeDetailApiResponseSchema = z.object({
  strDrink: z.string(),
  strDrinkThumb: z.string(),
  idDrink: z.string(),
});

export const RecipeDetailsApiResponseSchema = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string(),
  strInstructions: z.string(),
  strIngredient1: z.string().nullable(),
  strIngredient2: z.string().nullable(),
  strIngredient3: z.string().nullable(),
  strIngredient4: z.string().nullable(),
  strIngredient5: z.string().nullable(),
  strIngredient6: z.string().nullable(),
  strMeasure1: z.string().nullable(),
  strMeasure2: z.string().nullable(),
  strMeasure3: z.string().nullable(),
  strMeasure4: z.string().nullable(),
  strMeasure5: z.string().nullable(),
  strMeasure6: z.string().nullable(),
});

export const RecipeApiResponseSchema = z.object({
  strDrink: z.string(),
  strDrinkThumb: z.string(),
  idDrink: z.string(),
});

export const RecipesApiResponseSchema = z.object({
  drinks: z.array(RecipeApiResponseSchema),
});

export const SearchFilterSchema = z.object({
  ingredient: z.string(),
  category: z.string(),
});
