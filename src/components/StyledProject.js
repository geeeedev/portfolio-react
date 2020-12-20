import styled from "styled-components";
import { keyframes } from "styled-components";

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

// export const RotateDiv = styled.div`
//   display: inline-block;
//   animation: ${rotate} 2s linear 3;
//   padding: 2rem 1rem;
//   font-size: 1.2rem;
// `;

// const slowEmerge = keyframes`
//   0% {
//     transform: translateY(0px);
//     opacity: 0;
//   }
//   100% {
//     transform: translateY(-100px);
//     opacity: 1;
//   }
// `;

// animation-name: ${slowEmerge};
// per project
export const Row = styled.div`
  padding: 0 8%;
  display: inline-flex;
  flex-wrap: wrap;
  // justify-content: ${(props) => props.justify};  //N/A
  justify-content: ${({ justify }) => justify || "space-evenly"};
  align-items: center;

  // animation-duration: 3s;
  // animation-style: linear;
  // animation-delay: 3s;
  // animation-iteration-count: 1;

  // outline: 1px solid blue; //////////// Row - blue
`;

// per project item: img vs. desc
export const Col = styled.div`
  flex: 1;
  order: ${({ idx }) => (idx % 2 === 0 ? "2" : "1")};

  // &:hover {background-color: olive;} ///////////// Test
  //position: relative;
  // z-index: -1;  //canNOT use -1, -1 kills onClick
  // outline: 1px dashed green; //////////// Col - green dash
`;

export const Img = styled.img.attrs(() => ({
  alt: "Project Screenshot",
}))`
  width: 100%;
  height: 80%;
  transition: transform 0.5s linear;

  &:hover {
    // transform: scale(1.1);
    opacity: 0.5;
  }

  //position: relative;
  // tooltip: "click for live project";
`;

export const A = styled.a.attrs(() => ({
  target: "_blank",
  rel: "noopener noreferrer",
}))``;

export const Desc = styled.div`
  padding: 5%;
  width: 100%;
  height: 100%;
  text-align: center; //could adjust left/right based on where img is???

  // outline: 1px dotted pink;
`;

// export const Tooltip = styled.span`
//   visibility: hidden;
//   color: red;
//   text-align: center;
//   position: absolute;
//   z-index: 2;

//   ${ImgProj}:hover & {
//     visibility: visible;
//   }
// `;

export const Hr = styled.hr`
  border-top: 3px ridge #61dafb;
  opacity: 0.5;
`;

export const Tech = styled.div`
  display: flex;
  justify-content: center;

  // outline: 1px dotted yellow;
`;

export const TechDtl = styled.div`
  margin: 20px;
  padding: 20px 15px;

  // outline: 1px dotted orange;
`;

export const TechHeader = styled.h5`
  border-bottom: 1px #61dafb;
  font-weight: bold;
  // font-style: italic;
`;

export const RepoButton = styled.button.attrs(() => ({
  target: "_blank",
  rel: "noopener noreferrer",
}))`
  margin: 20px;
  padding: 0.25em 1em;
  color: #61dafb !important; //override bootstrap setting
  text-decoration: none !important; //override bootstrap setting
  border: 2px solid #61dafb;
  border-radius: 5px;
  background: transparent;
  &:hover {
    font-weight: 900;
    box-shadow: 0px 0px 4px lightblue;
  }
`;
