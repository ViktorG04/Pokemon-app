import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useMarkFavorites = (currentItems) => {
  const [pokemonsPage, setPokemonsPage] = useState([]);

  const { favorites } = useSelector((state) => state.favorite);

  useEffect(() => {
    const favoritesPokemons = currentItems.map((pokemon) => {
      const start = favorites.every((favorite) => favorite.id !== pokemon.id);
      return { ...pokemon, start };
    });

    setPokemonsPage(favoritesPokemons);
  }, [currentItems, favorites]);

  return { pokemonsPage };
};

export default useMarkFavorites;
