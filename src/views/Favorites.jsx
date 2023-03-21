import React from "react";
import { useSelector } from "react-redux";
import useFavorite from "../hooks/useFavorite";
import usePage from "../hooks/usePage";

import Input from "../components/formComponents/Input";
import Modal from "../components/modal/Modal";
import PokemonDetails from "../components/pokemon/PokemonDetails";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favorite);

  const { isOpenModal, idPokemon, onHandleCloseModal, onHandleDetails, onHandleDelete } =
    useFavorite();

  const { word, setWord, currentItems, currentPage, buttonPrev, buttonNext } = usePage(
    favorites,
    "alias"
  );

  return (
    <>
      <h1>Page: {currentPage}</h1>
      <Input name="search" value={word} onHandleChange={(e) => setWord(e.target.value)} />
      <button onClick={buttonPrev}>Prev</button>
      <button onClick={buttonNext}>Next</button>
      <h2>Pokemons</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Alias</th>
            <th>Image</th>
            <th>Comments</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((pokemon, index) => (
            <tr key={`favorite-${parseInt(index)}`}>
              <td>{pokemon.id}</td>
              <td>{pokemon.alias}</td>
              <td>
                <button onClick={() => onHandleDetails(pokemon.id)}>
                  <img src={pokemon.image} alt={pokemon.name}></img>
                </button>
              </td>
              <td>{pokemon.comment}</td>
              <td>
                <button onClick={() => onHandleDelete(pokemon.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isOpenModal}>
        {isOpenModal ? (
          <PokemonDetails idPokemon={idPokemon} onCloseModal={onHandleCloseModal} />
        ) : null}
      </Modal>
    </>
  );
};

export default Favorites;
