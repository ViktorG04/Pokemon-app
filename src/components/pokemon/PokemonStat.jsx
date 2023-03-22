import React from "react";
import { Container, Property } from "./styled/PokemonStatElements";

const PokemonStat = ({ name, information }) => {
  return (
    <Container>
      <Property>{name}:</Property>
      <p>{information}</p>
    </Container>
  );
};

export default PokemonStat;
