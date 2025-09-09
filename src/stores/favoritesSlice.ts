import type { StateCreator } from "zustand";
import type { RecipeDetails } from "../types";
import { createRecipesSlice, type RecipesSliceType } from "./recipeSlice";
import { createNotificationsSlice, type NotificationSliceType } from "./notificationSlice";

export type FavoritesSliceType = {
  favorites: RecipeDetails[];
  handleClickFavorite: (recipe: RecipeDetails) => void;
  favoriteExists: (idDrink: string) => boolean;
  loadFromStorage: () => void;
};

export const createFavoritesSlice: StateCreator<
  FavoritesSliceType & RecipesSliceType & NotificationSliceType,
  [],
  [],
  FavoritesSliceType
> = (set, get, store) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    const { favorites } = get();
    const exists = get().favoriteExists(recipe.idDrink);

    const updatedFavorites = exists
      ? favorites.filter((fav) => fav.idDrink !== recipe.idDrink)
      : [...favorites, recipe];

    set({ favorites: updatedFavorites });
    createRecipesSlice(set, get, store).closeModal();
    createNotificationsSlice(set, get, store).showNotification({
      text: exists ? 'Se eliminó receta de favoritos' : 'Se agregó a favoritos',
      error: exists
    })
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  },
  favoriteExists: (idDrink) => {
    const { favorites } = get();
    return favorites.some((fav) => fav.idDrink === idDrink);
  },
  loadFromStorage: () => {
    const storedFavorites = localStorage.getItem('favorites')
    if(storedFavorites) {
        set({
            favorites: JSON.parse(storedFavorites)
        })
    }
  }
});
