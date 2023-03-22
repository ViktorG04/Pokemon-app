import React from "react";
import { useSelector } from "react-redux";
import useFavorite from "../hooks/useFavorite";
import usePage from "../hooks/usePage";
import useModal from "../hooks/useModal";
import Modal from "../components/modal/Modal";
import PokemonDetails from "../components/pokemon/PokemonDetails";
import Dashboard from "../components/dashboard/Dashboard";
import InformationPage from "../components/page/InformationPage";
import { Container } from "./styled/ViewElements";
import { Table, Image, Button } from "./styled/FavoritesElements";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favorite);

  const { open, closeModal, openModal } = useModal();

  const { idPokemon, onHandleDetails, onHandleDelete } = useFavorite(openModal);

  const { word, catchCharacters, currentItems, currentPage, buttonPrev, buttonNext } = usePage(
    favorites,
    "alias"
  );

  return (
    <Dashboard pageName="Favorites" linkRedirect="/" returnName="HOME">
      <Container>
        <InformationPage
          findPokemon={word}
          onChange={catchCharacters}
          currentPage={currentPage}
          onHandlePrev={buttonPrev}
          onHandleNext={buttonNext}
          page="favorite"
        />

        <Table>
          <thead>
            <tr>
              <th>Alias</th>
              <th>Image</th>
              <th>Comments</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((pokemon, index) => (
              <tr key={`favorite-${parseInt(index)}`}>
                <td>{pokemon.alias}</td>
                <td>
                  <Image
                    src={pokemon.image}
                    alt={pokemon.name}
                    onClick={() => onHandleDetails(pokemon.id)}
                  />
                </td>
                <td>{pokemon.comment}</td>
                <td>
                  <Button onClick={() => onHandleDelete(pokemon.alias)}>delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal isOpen={open}>
          {open ? <PokemonDetails idPokemon={idPokemon} onCloseModal={closeModal} /> : null}
        </Modal>
      </Container>
    </Dashboard>
  );
};

export default Favorites;
