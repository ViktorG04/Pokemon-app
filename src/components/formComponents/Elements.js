import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 20px;
`;

export const Error = styled.span`
  color: red;
  font-weight: bold;
`;

export const Alias = styled.input`
  margin: 5px 0;

  ${(props) => {
    switch (props.search) {
      case true:
        return `
              border-radius: 10px;
              width: 100%;
              text-align: center;
              font-size: 12px;

              @media (min-width: 800px) {
                    font-size: 20px;
              }`;
      case false:
        return `border-radius: none;
        font-size: 18px;
        `;
      default:
        break;
    }
  }};
`;

export const Comments = styled.textarea`
  font-size: 18px;
  resize: none;
  margin: 5px 0;
`;
