// import logo from "./logo.svg";
import "./App.css";

import { GlobalStyle } from "./components/StyledGlobal";
import NavHeader from "./components/Header";
import PortfolioUI from "./components/PortfolioUI";
import Skill from "./components/Skill";


import SocialMediaIconList from "./components/SocialMediaIconList";

function App() {
  return (
    <>
    {/* <div className="App"> */}
      <GlobalStyle darkMode />

      <NavHeader />
      <PortfolioUI />  {/* ProjectSection */}
      <Skill />
      <SocialMediaIconList />

    </>
  );
}

export default App;
