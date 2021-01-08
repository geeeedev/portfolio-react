import { createGlobalStyle } from "styled-components";

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
            
        // outline: 1px solid green;
    }
`;

// App.js: {/* <GlobalStyle darkMode /> */}
// body {
//     background-color: ${(props) =>
//       props.darkMode ? colorRhino : "whitesmoke"};
//     color: ${(props) => (props.darkMode ? "whitesmoke" : colorRhino)};
        
//     // background-color: yellow;
//     // outline: 1px solid green;
// }


