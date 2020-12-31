import styled from "styled-components";
// import { keyframes } from "styled-components";

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
// animation-duration: 3s;
// animation-style: linear;
// animation-delay: 3s;
// animation-iteration-count: 1;
// per project
export const Row = styled.div`
  padding: 3% 8%;
  display: inline-flex;
  flex-wrap: wrap;
  // justify-content: ${(props) => props.justify};  //N/A
  justify-content: ${({ justify }) => justify || "space-evenly"};
  align-items: center;

  // outline: 1px solid blue; //////////// Row - blue
`;

// per project item: img vs. desc
export const Col = styled.div`
  flex: 1;
  order: ${({ idx }) => (idx % 2 === 0 ? "2" : "1")};

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
    transform: scale(1.05);
    box-shadow: 0px 0px 6px ${({ theme }) => theme.lnkShdColor};
  }
`;

export const A = styled.a.attrs(() => ({
  target: "_blank",
  rel: "noopener noreferrer",
}))``;

export const RepoButton = styled.button.attrs(() => ({
  target: "_blank",
  rel: "noopener noreferrer",
}))`
  margin: 20px;
  padding: 0.25em 1em;
  color: ${({ theme }) =>
    theme.btnColor} !important; //override bootstrap setting
  text-decoration: none !important; //override bootstrap setting
  border: 2px solid ${({ theme }) => theme.btnColor};
  border-radius: 5px;
  background: transparent;
  &:hover {
    font-weight: 900;
    box-shadow: 0px 0px 4px ${({ theme }) => theme.lnkShdColor};
  }

  // outline: 1px solid lime;
`;

export const TooltipDiv = styled.div`
  position: relative;

  // outline: 1px solid lime;
`;

export const Tooltip = styled.span`
  padding: 5px 5px;
  border-radius: 5px;
  width: 160px;
  background-color: #555;
  color: yellow;
  text-align: center;
  visibility: hidden;
  position: absolute;
  bottom: 10px;
  right: 15px;
  z-index: 2;
  // opacity: 0;
  // transition: opacity 0.4s;

  ${TooltipDiv}:hover & {
    visibility: visible;
    // opacity: 1;
  }
`;
