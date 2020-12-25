// import logo from "./logo.svg";
import "./App.css";

import { GlobalStyle } from "./components/StyledGlobal";
import NavHeader from "./components/Header";
import PortfolioUI from "./components/PortfolioUI";
import Skill from "./components/Skill";

// import SocialMediaIcons from './components/SocialMediaIcons';

import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <div className="App"> */}
      <GlobalStyle darkMode />

      <NavHeader />
      {/* <SocialMediaIcons /> */}

      
      {/*<PortfolioUI />  {/* ProjectSection */}
      {/* <Skill /> */}
      {/* <Footer /> */}


    </>
  );
}

export default App;
