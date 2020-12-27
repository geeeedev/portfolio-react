import { createGlobalStyle } from "styled-components";

const colorRhino = "#3f4757";
export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        // color: #d47b8ae1;
    }
    body {
        background-color: ${({theme}) => theme.bgColor};
        color: ${({theme}) => (theme.txtColor)};
            
        // background-color: yellow;
        // outline: 1px solid green;
    }
`;


// body {
//     background-color: ${(props) =>
//       props.darkMode ? colorRhino : "whitesmoke"};
//     color: ${(props) => (props.darkMode ? "whitesmoke" : colorRhino)};
        
//     // background-color: yellow;
//     // outline: 1px solid green;
// }


