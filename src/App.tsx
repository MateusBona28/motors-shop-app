
import React from "react";
import Routes from "./router";
import { GlobalStyle } from './styles/index';

import "./App.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle>
        <Routes />
      </GlobalStyle/>
    </div>
  );
}

export default App;
