import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Effetto per gestire lo scroll e cambiare lo stile della navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Chiude il menu quando si cambia pagina
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className={`navbar-luxury ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        <Link to="/main" className="navbar-logo">
          <span className="logo-text">Ferramenta</span>
          <span className="logo-accent">ABC</span>
        </Link>
        
        <div className="navbar-menu-toggle" onClick={toggleMenu}>
          <div className={`menu-icon ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-items">
            <li className="navbar-item">
              <Link to="/main" className={location.pathname === '/main' ? 'navbar-link active' : 'navbar-link'}>
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/servizi" className={location.pathname === '/servizi' ? 'navbar-link active' : 'navbar-link'}>
                Servizi
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/contatti" className={location.pathname === '/contatti' ? 'navbar-link active' : 'navbar-link'}>
                Contatti
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/preventivo" className={location.pathname === '/preventivo' ? 'navbar-link active' : 'navbar-link'}>
                Preventivo
              </Link>
            </li>
          </ul>
          
          <div className="navbar-cta">
            <a href="tel:+390612345678" className="phone-cta">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>Chiama Ora</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;