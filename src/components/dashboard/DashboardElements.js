import styled from "styled-components";

export const Navbar = styled.div`
  background: #0d47a1;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
`;

export const Elements = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  font-size: 15px;
  text-transform: uppercase;

  @media (min-width: 800px) {
    font-size: 25px;
    width: 70%;
    justify-content: space-between;
  }
`;

export const Body = styled.div`
  background: #cfcfcf;
`;

export const Image = styled.img`
  display: block;
  width: 15vh;

  @media (min-width: 800px) {
    width: 25vh;
  }
`;
