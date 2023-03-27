import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { getPokemons } from "../redux/action/pokemonActions";
import { Container } from "./styled/ViewElements";
import usePage from "../hooks/usePage";
import Pokemons from "../components/pokemon/Pokemons";
import Dashboard from "../components/dashboard/Dashboard";
import InformationPage from "../components/page/InformationPage";
import usePagePokemons from "../hooks/useMarkFavorites";

const Principal = () => {
  const { loading, pokemons, error, request } = useSelector((state) => state.pokemons);

  const { word, catchCharacters, currentItems, currentPage, buttonPrev, buttonNext } = usePage(
    pokemons,
    "name"
  );

  const { pokemonsPage } = usePagePokemons(currentItems);

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
    <Dashboard pageName="Pokemons" linkRedirect="/favorites" returnName="FAVORITES">
      <>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Container>
            <InformationPage
              findPokemon={word}
              onChange={catchCharacters}
              currentPage={currentPage}
              onHandlePrev={buttonPrev}
              onHandleNext={buttonNext}
              page="principal"
            />
            <Pokemons pokemons={pokemonsPage} />
          </Container>
        )}
      </>
    </Dashboard>
  );
};

export default Principal;
