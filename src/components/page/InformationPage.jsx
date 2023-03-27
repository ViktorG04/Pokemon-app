import React from "react";

import Input from "../formComponents/Input";

import { Section, PageInformation, Button } from "./PageElements";

const InformationPage = ({
  findPokemon,
  onChange,
  currentPage,
  onHandlePrev,
  onHandleNext,
  page,
}) => {
  return (
    <Section width={page}>
      <PageInformation>
        <Button onClick={onHandlePrev}>
          <i className="fas fa-angle-double-left" />
        </Button>
        <h1>Page {currentPage + 1}</h1>
        <Button onClick={onHandleNext}>
          <i className="fas fa-angle-double-right" />
        </Button>
      </PageInformation>
      <Input
        name="search"
        value={findPokemon}
        placeholder="Search pokemon by name"
        onHandleChange={(e) => onChange(e)}
        search={true}
      />
    </Section>
  );
};

export default InformationPage;
