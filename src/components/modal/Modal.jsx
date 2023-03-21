import React from "react";
import { Container } from "./ModalElements";

const Modal = ({ isOpen, children }) => {
  return <Container isOpen={isOpen}>{children}</Container>;
};

export default Modal;
