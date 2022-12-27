import React from "react";
import { Logo, Nav } from "../styles/HeaderStyle.js";
import { GrRestaurant } from "react-icons/gr";

const Header = () => {
  return (
    <Nav>
      <Logo to={"/"}>
        <GrRestaurant />
        <h2>
          Coo<span>king</span>&Fun
        </h2>
      </Logo>
    </Nav>
  );
};

export default Header;
