import logo from "./logo.svg";
import "./App.css";

import PortfolioUI from "./components/PortfolioUI";
import { GlobalStyle } from "./components/StyledGlobal";
import About from "./components/About";
import NavHeader from "./components/Header";

import SocialMediaIconList from "./components/SocialMediaIconList";

function App() {
  return (
    <div >
    {/* <div className="App"> */}
      <GlobalStyle darkMode />

      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <NavHeader />

      <PortfolioUI />
      {/* <hr /> */}
      <About />

      <SocialMediaIconList />
    </div>
  );
}

export default App;
