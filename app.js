import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Patients from './pages/Patients';
import About from './pages/About';
const FloatingBackground = () => {
  return (
    <div className="floating-elements">
      <div className="floating-element">❤️</div>
      <div className="floating-element">⚕️</div>
      <div className="floating-element">🏥</div>
      <div className="floating-element">💊</div>
      <div className="floating-element">🩺</div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}


export default App;