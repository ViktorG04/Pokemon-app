import React from "react";
import { NavLink } from "react-router-dom";
import { Body, Navbar, Image, Elements } from "./DashboardElements";
import logo from "../../assets/Pokedex.png";

const styledNavLink = {
  color: "white",
};

const Dashboard = ({ children, pageName, linkRedirect, returnName }) => {
  return (
    <>
      <Navbar>
        <Elements>
          <Image src={logo} alt="Pokedex" />
          <h1>{pageName}</h1>
          <NavLink style={styledNavLink} to={linkRedirect}>
            {returnName}
          </NavLink>
        </Elements>
      </Navbar>
      <Body>{children}</Body>
    </>
  );
};

export default Dashboard;
