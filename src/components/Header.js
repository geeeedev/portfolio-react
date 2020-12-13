import React from "react";
import { Img, Header, NavLink } from "./StyledHeader";
import HeaderImg from "../img/HeaderImg.PNG";


const NavHeader = () => {
  return (
    <>
      <Img src={HeaderImg} alt="Header Image" />
      <Header >GL
          <NavLink href='#proj'> Projects </NavLink>
          <NavLink href='#skill'> Skills </NavLink>
          <NavLink href='#about'> About </NavLink>
          <NavLink href='#contact'> Contact </NavLink>
          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i></a>
      </Header>
    </>
  );
};

export default NavHeader;
