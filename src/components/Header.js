import React, { useState } from "react";
import {
  Img,
  NavLinkContainer,
  HeaderSMIconList,
  ModeSwitch,
  NavLink,
} from "./StyledHeader";
import HeaderImg00 from "../img/HeaderImg0z.png";
import HeaderImg01 from "../img/HeaderImg01.png";
import HeaderImg02 from "../img/HeaderImg02.png";
import HeaderImg03 from "../img/HeaderImg03.png";
import HeaderImg04 from "../img/HeaderImg04.png";
import HeaderImg05 from "../img/HeaderImg05.png";
import HeaderImg06 from "../img/HeaderImg06.png";
import HeaderImg07 from "../img/HeaderImg07.png";
import HeaderImg08 from "../img/HeaderImg08.png";
import HeaderImg09 from "../img/HeaderImg09.png";
import HeaderImg10 from "../img/HeaderImg10.png";
import HeaderImg11 from "../img/HeaderImg11.png";
import HeaderImg12 from "../img/HeaderImg12.png";
import HeaderImg13 from "../img/HeaderImg13.png";
import HeaderImg13x from "../img/HeaderImg13x.png";
import HeaderImg14 from "../img/HeaderImg14.jpg";
import HeaderImg15 from "../img/HeaderImg15.jpg";

import MoonIcon from "../img/IconMoon2.png";
import SunIcon from "../img/IconSun2.ico";
import CV from "../data/GwennieLauResume.pdf";

import SocialMediaIcons from "./SocialMediaIcons";

import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
/* Import bottstrap css - can be included here or in src/index.js or App.js INSTEAD OF index.html <link> */
// import 'bootstrap/dist/css/bootstrap.min.css';

const NavHeader = ({ dkMode, setDkMode }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Carousel indicators={false} fade interval={5000}>
        <Carousel.Item interval={7000}>
          <Img src={HeaderImg00} alt="Header Image - " />
        </Carousel.Item>

        <Carousel.Item>
          <Img src={HeaderImg01} alt="Header Image - " />
        </Carousel.Item>

        <Carousel.Item>
          <Img src={HeaderImg02} alt="Header Image - " />
        </Carousel.Item>

        <Carousel.Item>
          <Img src={HeaderImg03} alt="Header Image - " />
        </Carousel.Item>

        <Carousel.Item>
          <Img src={HeaderImg04} alt="Header Image - " />
        </Carousel.Item>

        <Carousel.Item>
          <Img src={HeaderImg05} alt="Header Image - " />
        </Carousel.Item>

        <Carousel.Item>
          <Img src={HeaderImg06} alt="Header Image - " />
        </Carousel.Item>

        <Carousel.Item>
          <Img src={HeaderImg07} alt="Header Image - " />
        </Carousel.Item>

        <Carousel.Item>
          <Img src={HeaderImg08} alt="Header Image - " />
        </Carousel.Item>

        <Carousel.Item>
          <Img src={HeaderImg09} alt="Header Image - " />
        </Carousel.Item>

        <Carousel.Item>
          <Img src={HeaderImg10} alt="Header Image - " />
        </Carousel.Item>
        <Carousel.Item>
          <Img src={HeaderImg11} alt="Header Image - " />
        </Carousel.Item>
        <Carousel.Item>
          <Img src={HeaderImg12} alt="Header Image - " />
        </Carousel.Item>
        <Carousel.Item>
          <Img src={HeaderImg13} alt="Header Image - " />
        </Carousel.Item>
        <Carousel.Item>
          <Img src={HeaderImg13x} alt="Header Image - " />
        </Carousel.Item>
        <Carousel.Item>
          <Img src={HeaderImg14} alt="Header Image - " />
        </Carousel.Item>
        <Carousel.Item>
          <Img src={HeaderImg15} alt="Header Image - Griffith Park Sunset" />
        </Carousel.Item>
      </Carousel>

      <HeaderSMIconList>
        <SocialMediaIcons padSize="0.25em" />
      </HeaderSMIconList>
      <NavLinkContainer>
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
