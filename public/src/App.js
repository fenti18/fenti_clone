import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Belajar from './pages/Belajar';
import Latihan from './pages/Latihan';
import Quiz from './pages/Quiz';
import Tentang from './pages/Tentang';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
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