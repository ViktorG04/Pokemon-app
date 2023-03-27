import React from "react";
import { Type } from "./styled/PokemonElements";

const TypePokemon = ({ type }) => {
  return <Type color={type}>{type}</Type>;
};

export default TypePokemon;
