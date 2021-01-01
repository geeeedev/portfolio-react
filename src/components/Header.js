import React, { useState } from "react";
import {
  Img,
  NavLinkContainer,
  HeaderSMIconList,
  ModeSwitch,
  NavLink,
} from "./StyledHeader";
import HeaderImg0 from "../img/HeaderImg0z.png";
import HeaderImg1 from "../img/HeaderImg1.png";
import HeaderImg2 from "../img/HeaderImg2.png";
import HeaderImg3 from "../img/HeaderImg3.png";
import HeaderImg4 from "../img/HeaderImg4.png";
import HeaderImg5 from "../img/HeaderImg5.png";
import HeaderImg6 from "../img/HeaderImg6.png";
import HeaderImg7 from "../img/HeaderImg7.png";
import HeaderImg8 from "../img/HeaderImg8.png";
import HeaderImg9 from "../img/HeaderImg9.png";
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
      <Carousel indicators={false} slide interval={5000} >
        <Carousel.Item interval={7000} >
          <Img src={HeaderImg0} alt="Header Image - Griffith Park Sunset" />
        </Carousel.Item>

        <Carousel.Item >
          <Img src={HeaderImg1} alt="Header Image - Griffith Park Sunset" />
        </Carousel.Item>

        <Carousel.Item >
          <Img src={HeaderImg2} alt="Header Image - Griffith Park Sunset" />
        </Carousel.Item>

        <Carousel.Item >
          <Img src={HeaderImg3} alt="Header Image - Griffith Park Sunset" />
        </Carousel.Item>

        <Carousel.Item >
          <Img src={HeaderImg4} alt="Header Image - Griffith Park Sunset" />
        </Carousel.Item>

        <Carousel.Item >
          <Img src={HeaderImg5} alt="Header Image - Griffith Park Sunset" />
        </Carousel.Item>

        <Carousel.Item >
          <Img src={HeaderImg6} alt="Header Image - Griffith Park Sunset" />
        </Carousel.Item>

        <Carousel.Item >
          <Img src={HeaderImg7} alt="Header Image - Griffith Park Sunset" />
        </Carousel.Item>

        <Carousel.Item >
          <Img src={HeaderImg8} alt="Header Image - Griffith Park Sunset" />
        </Carousel.Item>
        
        <Carousel.Item >
          <Img src={HeaderImg9} alt="Header Image - Griffith Park Sunset" />
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
