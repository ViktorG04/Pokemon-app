import styled from "styled-components";

export const Container = styled.div`
  display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  place-items: center;
`;
