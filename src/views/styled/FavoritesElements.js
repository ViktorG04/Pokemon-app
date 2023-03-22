import styled from "styled-components";

export const Table = styled.table`
  background: #fff;
  width: 90%;
  margin: 40px 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 18px;

  @media (min-width: 800px) {
    width: 70%;
  }
`;

export const Image = styled.img`
  display: block;
  cursor: pointer;
  width: 15vh;
  margin: 10px auto;
`;

export const Button = styled.button`
  display: block;
  margin: 10px auto;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 10px;
  background: navajowhite;

  :hover {
    background-color: #4791d0;
  }
`;
