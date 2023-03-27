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
import TableFavorites from "../components/table/TableFavorites";

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
        {currentItems.length > 10 ? (
          <InformationPage
            findPokemon={word}
            onChange={catchCharacters}
            currentPage={currentPage}
            onHandlePrev={buttonPrev}
            onHandleNext={buttonNext}
            page="favorite"
          />
        ) : null}

        <TableFavorites
          currentItems={currentItems}
          onHandleDetails={onHandleDetails}
          onHandleDelete={onHandleDelete}
        />

        <Modal isOpen={open}>
          {open ? <PokemonDetails idPokemon={idPokemon} onCloseModal={closeModal} /> : null}
        </Modal>
      </Container>
    </Dashboard>
  );
};

export default Favorites;
