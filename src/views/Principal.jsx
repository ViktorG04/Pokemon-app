import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { getPokemons } from "../redux/action/pokemonActions";

import usePage from "../hooks/usePage";
import Pokemons from "../components/pokemon/Pokemons";
import Input from "../components/formComponents/Input";

const Principal = () => {
  const { loading, pokemons, error, request } = useSelector((state) => state.pokemons);

  const { word, setWord, currentItems, currentPage, buttonPrev, buttonNext } = usePage(
    pokemons,
    "name"
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (request) {
      dispatch(getPokemons());
    }
  }, [request, dispatch]);

  return (
    <>
      <h1>Pokemons</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Input
            name="search"
            value={word}
            placeholder="Search pokemon by name"
            onHandleChange={(e) => setWord(e.target.value)}
          />
          <Pokemons
            Pokemons={currentItems}
            currentPage={currentPage}
            onHandlePrev={buttonPrev}
            onHandleNext={buttonNext}
          />
        </>
      )}
    </>
  );
};

export default Principal;
