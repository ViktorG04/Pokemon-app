import React from "react";
import { NUMBERS } from "../../config/config";

import { Container, Error, Alias } from "./Elements";

const Input = ({ label, name, value, placeholder, onHandleChange, error }) => {
  return (
    <Container>
      {label ? <label>{label}:</label> : null}
      <Alias
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onHandleChange}
        onKeyDown={(evt) => NUMBERS.includes(evt.key) && evt.preventDefault()}
        maxLength={24}
      />
      {error && <Error>Value is Required!</Error>}
    </Container>
  );
};

export default Input;
