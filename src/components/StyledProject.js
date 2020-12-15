// import { propTypes } from "react-bootstrap/esm/Image";
import styled from "styled-components";

// export const Container = styled.div`
//   outline: 1px dashed red;
// `;

// per project container
export const Row = styled.div`
  display: flex;
  // justify-content: ${(props) => props.justify};  //N/A
  justify-content: ${({ justify }) => justify || "space-evenly"};
  flex-wrap: wrap;
  margin: 0px 120px;
  padding: 15px;
  // box-shadow: 0px 0px 4px lightblue;
  position: relative;
  // right: 30%;

  //transition and delay here
  // outline: 1px solid blue;
`;

// per project item: img vs. desc
export const Col = styled.div`
  flex: 1;
  order: ${({ idx }) => (idx % 2 === 0 ? "2" : "1")};
  position: relative;
  // z-index: -1;
  &:hover {
    z-index: 1;
  }

  outline: 1px dashed green;
`;

export const ImgProj = styled.img`
  // position: absolute;
  // top: 0;
  // right: 0;
  width: 100%;
  height: 100%;
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
}`;
