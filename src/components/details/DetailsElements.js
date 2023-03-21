import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px 0 5px 0;

  @media (min-width: 800px) {
    font-size: 20px;
  }
`;

export const Property = styled.strong`
  margin-right: 5px;
`;
