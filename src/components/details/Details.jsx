import React from "react";
import { Container, Property } from "./DetailsElements";

const Details = ({ name, information }) => {
  return (
    <Container>
      <Property>{name}:</Property>
      <p>{information}</p>
    </Container>
  );
};

export default Details;
