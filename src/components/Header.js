import React, { useState } from "react";
import {
  HeaderSMIconList,
  NavLinkContainer,
  BriefAbout,
  ModeSwitch,
  NavLink,
} from "./StyledHeader";

import ImgCarousel from "./ImgCarousel";
import SocialMediaIcons from "./SocialMediaIcons";

import MoonIcon from "../img/IconMoon2.png";
import SunIcon from "../img/IconSun2.ico";
import CV from "../data/GwennieLauResume.pdf";

import Modal from "react-bootstrap/Modal";
/* Import bootstrap css - can be included here or in src/index.js or App.js INSTEAD OF index.html <link> */
// import 'bootstrap/dist/css/bootstrap.min.css';

const NavHeader = ({ dkMode, setDkMode }) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ImgCarousel />
      <HeaderSMIconList>
        <SocialMediaIcons padSize="0.25em" />
      </HeaderSMIconList>
      <NavLinkContainer>
        <BriefAbout>
          I code.&nbsp;&nbsp;&nbsp;I skate.&nbsp;&nbsp;&nbsp;I
          photograph.
        </BriefAbout>
        <ModeSwitch
          src={dkMode ? SunIcon : MoonIcon}
          alt="Theme Switching Icon"
          onClick={() => {
            setDkMode(!dkMode);
          }}
        />
        <NavLink href="#proj"> Projects </NavLink>
        <NavLink href="#skill"> Skills </NavLink>
        {/* <NavLink href="#contact"> Contact </NavLink> */}
        <NavLink href="#resume" onClick={() => setShowModal(true)}>
          Resume
        </NavLink>
        {/* <NavLink href="#about"> Find Me </NavLink> */}
      </NavLinkContainer>

      <Modal show={showModal} size="lg" onHide={() => setShowModal(false)}>
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
