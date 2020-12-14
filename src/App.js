import logo from './logo.svg';
import './App.css';

import PortfolioUI from "./components/PortfolioUI"
import {GlobalStyle} from "./components/StyledCSS"
import About from './components/About';
import NavHeader from './components/Header';

function App() {
  return (
    <div className="App">
      <GlobalStyle darkMode />
      <NavHeader />
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      
      <PortfolioUI />
      {/* <hr /> */}
      <About />
      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >click ...</a> */}
    </div>
  );
}

export default App;
