import React from "react";
import { Logo, LogoAnimation, Nav } from "../styles/HeaderStyle.js";
import { GrRestaurant } from "react-icons/gr";

const Header = () => {
  return (
    <Nav>
      <Logo to={"/"}>
        <LogoAnimation
          animate={{ rotateY: 360 }}
          initial={{ rotateY: 0 }}
          exit={{ rotateY: 360 }}
          transition={{ duration: 0.5 }}
        >
          <GrRestaurant />
        </LogoAnimation>
        <h2>
          Coo<span>king</span>&Fun
        </h2>
      </Logo>
    </Nav>
  );
};

export default Header;
