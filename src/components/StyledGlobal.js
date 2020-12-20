import styled, { createGlobalStyle } from "styled-components";



const colorRhino = "#3f4757";
export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        // color: #d47b8ae1;
    }
    body {
        // background-color: yellow;
        background-color: ${(props) =>
          props.darkMode ? colorRhino: "whitesmoke" };
        color: ${(props) =>
            props.darkMode ? "whitesmoke": colorRhino };
        
            // outline: 1px solid green;
    }
`;


// export const Header = styled.header`  //Not Used?
//     background-color: #282c34;
//     // background-color: #333944;
//     // background-color: #3f4757;
//     min-height: 5vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     font-size: calc(10px + 2vmin);
//     color: white;
//     outline: 2px dotted red;
//   `;