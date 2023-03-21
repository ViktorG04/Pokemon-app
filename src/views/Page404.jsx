import React from "react";
import { Link } from "react-router-dom";
import { url } from "../helpers/helper";
import { ContainerPage, BodyError, Error } from "./styled/PageElements";

const Page404 = () => {
  const value = url();

  return (
    <ContainerPage>
      <BodyError>
        <Error>404</Error>
        <strong>PAGE NOT FOUND</strong>
        <p>
          The request URL <strong>/{value}</strong> was not found on this server
        </p>
        <Link to="/">Home Page</Link>
      </BodyError>
    </ContainerPage>
  );
};

export default Page404;
