import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 20px;
`;

export const Error = styled.span`
  color: red;
`;

export const Alias = styled.input`
  font-size: 18px;
  margin: 5px 0;
`;

export const Comments = styled.textarea`
  font-size: 18px;
  resize: none;
  margin: 5px 0;
`;
