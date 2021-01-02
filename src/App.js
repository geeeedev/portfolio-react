// import logo from "./logo.svg";
// import "./App.css";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/StyledGlobal";
import { darkTheme, lightTheme } from "./components/StyledTheme";
import NavHeader from "./components/Header";
import PortfolioUI from "./components/PortfolioUI";
import Skill from "./components/Skill";

// import SocialMediaIcons from './components/SocialMediaIcons';

import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeProvider theme={(darkMode && darkTheme) || lightTheme}>
        {/* <GlobalStyle darkMode /> */}
        <GlobalStyle />
        <NavHeader dkMode={darkMode} setDkMode={setDarkMode} />
        {/* <SocialMediaIcons /> */}
        <PortfolioUI /> {/* ProjectSection */}
        <Skill dkMode={darkMode} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
