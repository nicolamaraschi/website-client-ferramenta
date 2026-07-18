import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import Home from './pages/Home';
import Contatti from './pages/Contatti';
import Preventivo from './pages/Preventivo';
import Servizi from './pages/Servizi';
import Lavori from './pages/Lavori';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          {/* Reindirizza da '/' a '/main' */}
          <Route path="/" element={<Navigate to="/main" />} />
          <Route path="/main" element={<Home />} />
          <Route path="/lavori" element={<Lavori />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/preventivo" element={<Preventivo />} />
          <Route path="/servizi" element={<Servizi />} />
        </Routes>
      </main>
      <FloatingContact />
      <Footer />
    </Router>
  );
};

export default App;