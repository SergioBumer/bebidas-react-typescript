import axios from 'axios'
import { CategoriesApiResponseSchema, RecipesApiResponseSchema } from '../utils/recipes-schemas'
import type { SearchFilter } from '../types'

export const getCategories = async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

    const { data } = await axios(url)
    const result = CategoriesApiResponseSchema.safeParse(data)
    if (result.success) {
        return result.data
    }

}

export const searchRecipes = async (searchFilters: SearchFilter) => {
    const urlByName = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchFilters.category}&i=${searchFilters.ingredient}`

    const { data } = await axios(urlByName)
    const result = RecipesApiResponseSchema.safeParse(data)
    if (result.success) {
        return result.data
    }

}
