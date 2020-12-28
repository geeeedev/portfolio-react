import React, { useState } from "react";
import {
  Img,
  NavLinkContainer,
  // HeaderBar,
  HeaderSMIconList,
  ModeSwitch,
  NavLink,
} from "./StyledHeader";
import HeaderImg from "../img/HeaderImg.png";
// import NavHambg from "../img/NavHambgGray.png";
import MoonIcon from "../img/IconMoon2.png";
import SunIcon from "../img/IconSun2.ico";
import CV from "../data/GwennieLauResume.pdf";

import SocialMediaIcons from "./SocialMediaIcons";

import Modal from "react-bootstrap/Modal";
/* Import bottstrap css - can be included here or in src/index.js or App.js INSTEAD OF index.html <link> */
// import 'bootstrap/dist/css/bootstrap.min.css';

const NavHeader = ({dkMode, setDkMode}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Img src={HeaderImg} alt="Header Image - Griffith Park Sunset" />

      <HeaderSMIconList>
        <SocialMediaIcons padSize="0.25em" />
      </HeaderSMIconList>
      <NavLinkContainer>
        <ModeSwitch src={dkMode?SunIcon:MoonIcon} alt="Theme Switching Icon" onClick={()=>{setDkMode(!dkMode)}}  />
        <NavLink href="#proj"> Projects </NavLink>
        <NavLink href="#skill"> Skills </NavLink>
        <NavLink href="#contact"> Contact </NavLink>
        <NavLink href="#resume" onClick={() => setShowModal(true)}>
          Resume
        </NavLink>
        {/* <NavLink href="#about"> About </NavLink> */}
      </NavLinkContainer>

      <Modal
        show={showModal}
        size="lg"
        onHide={() => setShowModal(false)}
        // aria-labelledby="Gwennie's Resume in PDF"
      >
        {/* <Modal.Header closeButton>
          <Modal.Title> Gwennie's Resume </Modal.Title>
        </Modal.Header> */}
        <Modal.Body closeButton>
          <object
            type="application/pdf"
            data={CV}
            width="100%"
            height="1000"
            aria-labelledby="Gwennie's Resume in PDF"
          ></object>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavHeader;
