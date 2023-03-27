import { useState } from "react";

const useCurrentList = (openModalDetails, openModalForm) => {
  const [idPokemon, setIdPokemon] = useState(null);
  const [pokemon, setPokemon] = useState({});

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
    onHandleDetails,
    onHandleAddFavorite,
  };
};

export default useCurrentList;
