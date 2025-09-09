import { useMemo } from "react";
import DrinkCard from "../components/DrinkCard";
import { useAppStore } from "../stores/useAppStore";

export default function FavoritesPage() {
  const favorites = useAppStore((state) => state.favorites);
  const hasFavorites = useMemo(() => favorites.length, favorites);
  return (
    <>
      <h1 className="text-6xl font-extrabold">Favoritos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-10">
        {hasFavorites ? (
          favorites.map((favorite) => (
            <DrinkCard key={favorite.idDrink} drink={favorite} />
          ))
        ) : (
          <p className="my-10 text-center text-2xl">No hay resultados aún</p>
        )}
      </div>
    </>
  );
}
