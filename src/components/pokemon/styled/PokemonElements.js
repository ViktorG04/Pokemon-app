import styled from "styled-components";
import { TYPES } from "../../../config/config";

export const PokemonContainer = styled.div`
  display: flex;
  width: auto;
  border-radius: 10px;
  justify-content: space-between;
  margin: 10px;
  background: #cfcfcf;
`;

export const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const ContainerImagen = styled.div`
  text-align: right;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const Button = styled.button`
  display: block;
  margin: 10px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  background: white;

  :hover {
    background-color: #4791d0;
  }
`;

export const NamePokemon = styled.h2`
  padding: 10px;
  color: blue;
  text-align: center;
`;

export const Type = styled.strong`
  background-color: ${(props) => TYPES[props.color]};
  color: white;
  font-size: large;
  padding: 4px 10px;
  margin: 10px;
  text-transform: capitalize;
  text-align: center;
  border: 2px;
  border-radius: 5px;
`;

export const Image = styled.img`
  display: block;
  cursor: pointer;
  width: 20vh;
`;
