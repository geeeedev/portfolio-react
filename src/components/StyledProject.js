// import { propTypes } from "react-bootstrap/esm/Image";
import styled from "styled-components";

// export const Container = styled.div`
//   outline: 1px dashed red;
// `;

// per project container
export const Row = styled.div`
  padding: 100px 150px;
  display: flex;
  // flex-wrap: wrap;
  // justify-content: ${(props) => props.justify};  //N/A
  justify-content: ${({ justify }) => justify || "space-evenly"};
  // box-shadow: 0px 0px 4px lightblue;

  //transition and delay here
  outline: 1px solid blue;      //////////// Row - blue
`;

// per project item: img vs. desc
export const Col = styled.div`
  flex: 1;
  order: ${({ idx }) => (idx % 2 === 0 ? "2" : "1")};
  position: relative;
  &:hover {
    background-color: olive;    ///////////// Test
  }
  
  // z-index: -1;  //canNOT use -1, -1 kills onClick
  outline: 1px dashed green;    //////////// Col - green dash
`;

export const ImgProj = styled.img`
  width: 100%;
  height: 95%;
  position: relative;
  &:hover {
    opacity: 0.5;
  }
  
  tooltip: "click for live project";
  `;

export const Tooltip = styled.span`
  visibility: hidden;
  color: red;
  text-align: center;
  position: absolute;
  z-index: 2;

  ${ImgProj}:hover & {
    visibility: visible;
  }
`;
