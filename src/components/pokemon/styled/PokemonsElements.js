import styled from "styled-components";

export const ContainerList = styled.div`
  background: skyblue;
  width: 70%;
  overflow: hidden;
  margin: 40px auto;
  padding: 20px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
`;

export const ContainerGroupPokemon = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px auto;
  box-sizing: border-box;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  display: block;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 18px;
  background: navajowhite;

  :hover {
    background-color: #4791d0;
  }
`;

export const Page = styled.h1`
  text-align: center;
`;
