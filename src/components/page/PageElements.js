import styled from "styled-components";

export const Section = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  width: ${(props) => (props.width === "principal" ? "70%" : "90%")};
  margin-top: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (min-width: 800px) {
    width: 70%;
  }
`;

export const PageInformation = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  font-size: 10px;
  text-align: center;
  @media (min-width: 800px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  display: block;
  cursor: pointer;
  padding: 1px 10px;
  font-size: 16px;
  border: none;
  background: none;
  border-radius: 50px;

  :hover {
    background-color: #4791d0;
  }

  @media (min-width: 800px) {
    font-size: 20px;
    padding: 10px 20px;
  }
`;
