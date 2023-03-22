import styled from "styled-components";
import { BASE_STAT } from "../../../config/config";
//pokemon details
export const Container = styled.div`
  padding: 10px 40px 20px 40px;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  background: #cfcfcf;
  position: relative;
`;

export const NamePokemon = styled.h2`
  text-align: center;
  text-transform: uppercase;
  padding: 10px 0;
`;

export const Image = styled.img`
  display: block;
  cursor: pointer;
  width: 25vh;
  background: none;

  @media (min-width: 800px) {
    width: 35vh;
  }
`;

export const ContainerTypes = styled.div`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
`;

export const Exit = styled.button`
  display: block;
  background: none;
  font-size: 20px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;

  :hover {
    color: #4791d0;
  }
`;

export const Level = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: auto;
  background: #bbb7b7;
`;

export const Inner = styled.div`
  background: ${(props) => BASE_STAT[props.stat]};
  width: calc(${(props) => props.level} / 255 * 100%);
  height: 10px;
  border-radius: 10px;
`;
