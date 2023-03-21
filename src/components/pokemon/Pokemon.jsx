import React from "react";
import {
  PokemonContainer,
  ContainerDetails,
  ContainerImagen,
  Type,
  NamePokemon,
  Button,
  Image,
} from "./styled/PokemonElements";

const Pokemon = ({ pokemon, onHandleDetails, onHandleAddFavorite }) => {
  return (
    <PokemonContainer>
      <ContainerDetails>
        <NamePokemon>{pokemon?.name}</NamePokemon>
        {pokemon?.types.map((type, index) => (
          <Type key={`type-${index}`} color={type}>
            {type}
          </Type>
        ))}
        <Button onClick={() => onHandleAddFavorite(pokemon)}>Add favorite</Button>
      </ContainerDetails>
      <ContainerImagen>
        N° {pokemon.id}
        <Image src={pokemon.image} alt={pokemon.name} onClick={() => onHandleDetails(pokemon.id)} />
      </ContainerImagen>
    </PokemonContainer>
  );
};

export default Pokemon;
