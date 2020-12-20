import logo from "./logo.svg";
import "./App.css";

import { GlobalStyle } from "./components/StyledGlobal";
import NavHeader from "./components/Header";
import PortfolioUI from "./components/PortfolioUI";
import About from "./components/About";

import SocialMediaIconList from "./components/SocialMediaIconList";

function App() {
  return (
    <>
    {/* <div className="App"> */}
      <GlobalStyle darkMode />

      <NavHeader />

      <PortfolioUI />  {/* ProjectSection */}
      {/* <hr /> */}
      {/* <About /> */}

      <SocialMediaIconList />


    </>
  );
}

export default App;
