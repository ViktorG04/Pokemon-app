import styled from "styled-components";

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
`;

export const BodyError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  font-size: 18px;
  border: 2px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);

  @media (min-width: 800px) {
    font-size: 40px;
    padding: 40px;
  }
`;

export const Error = styled.h1`
  font-size: 100px;
`;
