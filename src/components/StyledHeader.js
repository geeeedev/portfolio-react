import styled from "styled-components";

export const Img = styled.img`
  width: 100vw;
  height: 60vh;
  opacity: 0.5;

  // outline: 2px dotted yellow;
`;

export const Header = styled.header`
  background-color: #282c34;
  // background-color: #333944;
  // background-color: #3f4757;
  height: 3vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  // justify-content: flex-end;  // N/A
  // overflow: hidden;           // N/A
  font-size: calc(10px + 2vmin);
  color: white;
  position: sticky;
  position: -webkit-sticky; //Safari
  top: 0;
  &:hover {
    font-weight: bold;
    color: yellow;
  }

  outline: 2px dotted red;
`;

export const NavLink = styled.a`
  color: #61dafb; //lightBlue
  text-decoration: none;
  &:hover {
    background-color: #61dafb; //swap color
    color: #282c34;
    font-weight: bold;
  }

  //NavLink shows when Header is hovered
  display: none;
  ${Header}:hover & {
    display: block;
  }
`;

// //plain CSS version
// /* Style the links inside the header navigation */
// header a {
//     display: block;
//     color: #61dafb;   //lightBlue
//     text-decoration: none;
// }

// /* Change the color of links on hover */
// header a:hover {
//     bbackground-color: #61dafb; //switched
//     color: #282c34;
//     font-weight: bold;
// }

export const NavLinkIcon = styled(NavLink)`
  display: none;
`;
