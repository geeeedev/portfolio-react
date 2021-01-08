import styled from "styled-components";
import { screen } from "../data/breakpoints";
// import { keyframes } from "styled-components";
// npm i react-animations
// import { fadeInUp } from "react-animations";

export const Img = styled.img`
  width: 100vw;
  height: 60vh;
  opacity: ${({ theme }) => theme.opac};
  // margin-bottom: -4px;
  // position: fixed;

  // outline: 2px dotted yellow;
`;

export const HeaderSMIconList = styled.div`
  height: 3.5vh;
  float: left;
  background-color: ${({ theme }) => theme.barColor};
  position: sticky;
  position: -webkit-sticky; //Safari
  top: 0;
  z-index: 1;

  // outline: 2px dotted orange;
`;

// animation: 3s ${keyframes`${fadeInUp}`} ;
export const NavLinkContainer = styled.header`
  margin: 0px;
  padding-right: 1%;
  background-color: ${({ theme }) => theme.barColor};
  // width: 100vw;
  height: 3.5vh;
  font-size: larger;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: sticky;
  position: -webkit-sticky; //Safari
  top: 0;
  z-index: 10;

  // font-size: calc(10px + 2vmin); // N/A
  // outline: 2px dotted red;
`;

export const BriefAbout = styled.div`
  height: 3.5vh;
  font-family: Monaco;
  font-size: calc(7px + 1vmin);
  color: #b6c3d9;
  position: absolute;
  top: 15%;
  left: 39%;

  @media ${screen.Xl} {
    left: 32%;
  }

  @media ${screen.Lg} {
    left: 28%;
  }

  @media ${screen.Md} {
    left: 23%;
  }

  @media ${screen.Sm} {
    top: 19%;
    left: 16%;
  }

  // outline: 2px dotted pink;
`;

export const ModeSwitch = styled.img`
  width: auto;
  height: 3.5vh;
  &:hover {
    transform: scale(1.3);
  }

  // position: relative;    // N/A
  // right: -20px;          // N/A
  // outline: 2px dotted yellow;
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.lnkColor};
  text-decoration: none !important; //overriding bootstrap's css
  padding: 0px 5px;
  border-radius: 5px;
  // font-size: 1.5vw; //proportion to viewport
  display: none;
  // NavLinks show when its Container is hovered
  ${NavLinkContainer}:hover & {
    display: block;
  }
  // styles when each NavLink is hovered
  &:hover {
    background-color: ${({ theme }) => theme.lnkColor}; //swap color
    color: ${({ theme }) => theme.lnkHvColor};
    font-weight: 900;
    box-shadow: 0px 0px 4px ${({ theme }) => theme.lnkShdColor};
  }

  // outline: 2px dotted lime;
`;

// //plain CSS version on NavLink
// //Style the links inside the header navigation
// header a {
//     color: #61dafb;   //lightBlue
//     text-decoration: none;
//     display: none;
// }

// //Links show when header is hovered
// header:hover  a {
//    display: block;
//}

// //Change the color of links on hover
// header a:hover {
//      background-color: #61dafb; //swap color
//      color: #282c34;
//      font-weight: 900;
// }
