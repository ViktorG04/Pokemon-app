import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  background: #cfcfcf;
  position: relative;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  text-align: center;

  @media (min-width: 800px) {
    font-size: 18px;
    padding: 20px 40px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`;

export const Button = styled.button`
  display: block;
  cursor: pointer;
  padding: 5px;
  font-size: 18px;
  background: navajowhite;
  border-radius: 10px;

  :hover {
    background-color: #4791d0;
  }
`;
