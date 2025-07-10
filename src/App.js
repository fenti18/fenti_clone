import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Belajar from './pages/Belajar';
import Latihan from './pages/Latihan';
import Quiz from './pages/Quiz';
import Tentang from './pages/Tentang';
import Landing from './pages/Landing';

const GlobalStyle = createGlobalStyle`
  * {
    text-shadow:
      0 0 2px #fff,
      0 0 4px #fff,
      1px 1px 0 #fff,
      -1px -1px 0 #fff;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/belajar" element={<Belajar />} />
            <Route path="/latihan" element={<Latihan />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/tentang" element={<Tentang />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; 