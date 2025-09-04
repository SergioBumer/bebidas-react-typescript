import { z } from "zod";

export const CategoriesApiResponseSchema = z.object({
    drinks: z.array(z.object({
        strCategory: z.string()
    }))
})

export const RecipesApiResponseSchema = z.object({
    drinks: z.array(z.object({
        strDrink: z.string(),
        strDrinkThumb: z.string(),
        idDrink: z.string(),
    }))
})

export const SearchFilterSchema = z.object({
    ingredient: z.string(),
    category: z.string()
})
