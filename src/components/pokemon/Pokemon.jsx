import React from "react";
import {
  PokemonContainer,
  ContainerDetails,
  ContainerImagen,
  NamePokemon,
  Button,
  Image,
} from "./styled/PokemonElements";
import TypePokemon from "./TypePokemon";

const Pokemon = ({ pokemon, onHandleDetails, onHandleAddFavorite }) => {
  const { name, types, id, image, start } = pokemon;
  return (
    <PokemonContainer>
      <ContainerDetails>
        <NamePokemon size={name.length}>{name}</NamePokemon>
        {types.map((type, index) => (
          <TypePokemon key={`type-${index}`} type={type} />
        ))}
        <Button disabled={!start} onClick={() => onHandleAddFavorite(pokemon)}>
          Add favorite
        </Button>
      </ContainerDetails>
      <ContainerImagen>
        N° {id}
        {!start && <i className="fas fa-star" />}
        <Image src={image} alt={name} onClick={() => onHandleDetails(pokemon.id)} />
      </ContainerImagen>
    </PokemonContainer>
  );
};

export default Pokemon;
