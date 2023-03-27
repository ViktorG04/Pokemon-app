import React from "react";
import Modal from "../modal/Modal";
import Pokemon from "./Pokemon";
import PokemonDetails from "./PokemonDetails";
import AddFavorite from "../form/AddFavorite";
import useCurrentList from "../../hooks/useCurrentList";
import useModal from "../../hooks/useModal";
import { ContainerList, ContainerGroupPokemon } from "./styled/PokemonsElements";

const Pokemons = ({ pokemons }) => {
  const { open: details, closeModal: closeModalDetails, openModal: openModalDetails } = useModal();
  const { open: form, closeModal: closeModalForm, openModal: openModalForm } = useModal();

  const { idPokemon, pokemon, onHandleDetails, onHandleAddFavorite } = useCurrentList(
    openModalDetails,
    openModalForm
  );

  return (
    <ContainerList>
      <ContainerGroupPokemon>
        {pokemons.map((pokemon, index) => (
          <Pokemon
            key={`pokemon-${parseInt(index)}`}
            pokemon={pokemon}
            onHandleDetails={onHandleDetails}
            onHandleAddFavorite={onHandleAddFavorite}
          />
        ))}
      </ContainerGroupPokemon>

      <Modal isOpen={details}>
        {details ? <PokemonDetails idPokemon={idPokemon} onCloseModal={closeModalDetails} /> : null}
      </Modal>
      <Modal isOpen={form}>
        {form ? <AddFavorite pokemon={pokemon} onCloseModal={closeModalForm} /> : null}
      </Modal>
    </ContainerList>
  );
};

export default Pokemons;
