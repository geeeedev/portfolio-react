import React from "react";
import { Img, Header, NavLink, HambgBar } from "./StyledHeader";
import HeaderImg from "../img/HeaderImg.png";
import NavHambg from "../img/NavHambgGray.png";

const NavHeader = () => {
  return (
    <>
      <Img src={HeaderImg} alt="Header Image" />
      <Header><HambgBar src={NavHambg} alt="" />
        <NavLink href="#proj"> Projects </NavLink>
        <NavLink href="#skill"> Skills </NavLink>
        <NavLink href="#about"> About </NavLink>
        <NavLink href="#contact"> Contact </NavLink>
      </Header>
    </>
  );
};

export default NavHeader;
