import React,{useEffect} from "react";
import {BrowserRouter, Route, Routes, /*NavLink, useParams*/} from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage.js";
import MonthlyScent from "./components/MonthlyScent.js";
import PrimeNumbers from "./components/PrimeNumbers.js";
import Footer from "./components/Footer.js";
import ReactGA from 'react-ga';

function App() {
  useEffect(() => {
    ReactGA.initialize('G-5FJ4F3WWLM');
    ReactGA.pageview(window.location.pathname);
  })
  return (
    <div className='App'>
      <header className='App-header'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/monthlyscent" element={<MonthlyScent />} />
            <Route path="/primenumbers/:max" element={<PrimeNumbers />} />
          </Routes>
        </BrowserRouter>
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
