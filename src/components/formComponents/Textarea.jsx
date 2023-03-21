import React from "react";
import { Container, Error, Comments } from "./Elements";

const Textarea = ({ label, value, onHandleChange, error }) => {
  return (
    <Container>
      <label>{label}:</label>
      <Comments
        type="text"
        name="comment"
        placeholder="Comment"
        value={value}
        onChange={onHandleChange}
        maxLength={42}
      />
      {error && <Error>Value is Required!</Error>}
    </Container>
  );
};

export default Textarea;
