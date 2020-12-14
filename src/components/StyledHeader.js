import styled from "styled-components";

export const Img = styled.img`
  width: 100vw;
  height: 60vh;
  opacity: 0.5;
  margin-bottom: -4px;

  // outline: 2px dotted yellow;
`;

export const HambgBar = styled.img`
  width: auto;
  height: 3.5vh;

  // position: relative;    // N/A
  // right: -20px;          // N/A
  // outline: 2px dotted yellow;
`;

export const Header = styled.header`
  background-color: #282c34;
  background-color: #303137;
  height: 3.5vh;
  padding-right: 15px;
  margin: 0px;
  color: #7d6c53;
  font-size: calc(10px + 2vmin);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  // justify-content: flex-end; // N/A
  // overflow: hidden;          // N/A
  position: sticky;
  position: -webkit-sticky; //Safari
  top: 0;
  &:hover {
    color: #61dafb;
    font-weight: 500;
  }

//   outline: 2px dotted red;
`;

export const NavLink = styled.a`
  color: #61dafb; //lightBlue
  text-decoration: none !important; //overriding bootstrap's css
  padding: 0px 5px;
  border-radius: 5px;
  font-size: 1.25vw; //proportion to viewport
  display: none;
  // NavLink shows when Header is hovered
  ${Header}:hover & {
    display: block;
  }
  // styles when each NavLink is hovered
  &:hover {
    background-color: #61dafb; //swap color
    color: #282c34;
    font-weight: 900;
    box-shadow: 0px 0px 4px lightblue;
  }
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


