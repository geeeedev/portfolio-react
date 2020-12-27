// import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/StyledGlobal";
import { darkTheme, lightTheme } from './components/StyledTheme'
import NavHeader from "./components/Header";
import PortfolioUI from "./components/PortfolioUI";
import Skill from "./components/Skill";

// import SocialMediaIcons from './components/SocialMediaIcons';

import Footer from "./components/Footer";

function App() {

  const [theme, setTheme] = useState();
  
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        {/* <GlobalStyle darkMode /> */}
        <GlobalStyle />
        <NavHeader />
        {/* <SocialMediaIcons /> */}
        <PortfolioUI /> {/* ProjectSection */}
        <Skill />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
