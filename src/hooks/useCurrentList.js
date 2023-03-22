import { useEffect, useState } from "react";
import { groupPokemons } from "../helpers/helper";

const useCurrentList = (pokemons, openModalDetails, openModalForm) => {
  const [idPokemon, setIdPokemon] = useState(null);
  const [pokemon, setPokemon] = useState({});
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const result = groupPokemons(pokemons);
    setGroups(result);
  }, [pokemons]);

  const onHandleDetails = (id) => {
    setIdPokemon(id);
    openModalDetails();
  };

  const onHandleAddFavorite = (pokemon) => {
    setPokemon(pokemon);
    openModalForm();
  };

  return {
    idPokemon,
    pokemon,
    groups,
    onHandleDetails,
    onHandleAddFavorite,
  };
};

export default useCurrentList;
