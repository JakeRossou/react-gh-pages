import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/navigation.js";
import Introduction from "./components/introduction.js";
import Services from "./components/services.js";
import Formats from "./components/formats.js";

function App() {
  return (
    <div className='App'>
      <nav id='navigationBar'>
        <Navigation />
      </nav>
      <header className='App-header'>
        <Introduction />
        <Services />
        <Formats />
      </header>
    </div>
  );
}

export default App;
