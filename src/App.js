import logo from './logo.svg';
import './App.css';

import PortfolioUI from "./components/PortfolioUI"

function App() {
  return (
    <div className="App">
      <header className="App-header">
       Portfolio Header HERE
      </header>
      <img src={logo} className="App-logo" alt="logo" />
      <PortfolioUI />
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
