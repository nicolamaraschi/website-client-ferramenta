import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-luxury">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">Carratu'</span>
              <span className="logo-accent">Aniello</span>
            </div>
            <p className="brand-description">
              Servizi professionali di serrature e chiavi con oltre 15 anni di esperienza.
            </p>
          </div>
          
          <div className="footer-columns">
            <div className="footer-column">
              <h5 className="column-title">Navigazione</h5>
              <ul className="footer-links">
                <li><a href="/main">Home</a></li>
                <li><a href="/servizi">Servizi</a></li>
                <li><a href="/contatti">Contatti</a></li>
                <li><a href="/preventivo">Preventivo</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h5 className="column-title">Contatti</h5>
              <ul className="footer-contacts">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Via Vergato 11, 20161 Milano MI</span>
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <span>+39 06 1234567</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>info@ferramentaabc.it</span>
                </li>
                <li>
                  <i className="fas fa-clock"></i>
                  <span>Lun-Ven: 9:00 - 18:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2024 Carratu' Aniello. Tutti i diritti riservati.
          </p>
          <div className="footer-divider"></div>
          <p className="legal-info">
            P.IVA: 13543820966 | C.F.: CRRNLL65B18T138V
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;