import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/StyledGlobal";
import { darkTheme, lightTheme } from "./components/StyledTheme";
import NavHeader from "./components/Header";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills";
/* Import bootstrap css - can be included in specific component or in src/index.js or App.js INSTEAD OF index.html <link> */
// import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeProvider theme={(darkMode && darkTheme) || lightTheme}>
        <GlobalStyle />
        <NavHeader dkMode={darkMode} setDkMode={setDarkMode} />
        <ProjectList />
        <Skills dkMode={darkMode} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
