import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-luxury">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">FabbroMilano</span>
              <span className="logo-accent">H24</span>
            </div>
            <p className="brand-description" style={{ marginBottom: '10px' }}>
              di Carratu' Aniello
            </p>
            <p className="brand-description" style={{ fontSize: '0.9rem' }}>
              Via Vergato 11<br />
              20161 Milano MI
            </p>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <h5 className="column-title">Navigazione</h5>
              <ul className="footer-links">
                <li><a href="/main">Home</a></li>
                <li><a href="/servizi">Servizi</a></li>
                <li><a href="/lavori">Lavori</a></li>
                <li><a href="/contatti">Contatti</a></li>
                <li><a href="/preventivo">Preventivo</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h5 className="column-title">Contatti</h5>
              <ul className="footer-contacts">
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <span>+39 392 3842491</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>info@carratuaniello.it</span>
                </li>
                <li>
                  <i className="fas fa-clock"></i>
                  <span>Pronto Intervento 24h/24</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} FabbroMilanoH24 di Carratu' Aniello. Tutti i diritti riservati.
          </p>
          <div className="footer-divider"></div>
          <p className="legal-info" style={{ lineHeight: '1.8' }}>
            P.IVA: 13543820966 | C.F.: CRRNLL65B18F138V<br />
            Codice Univoco (SDI): X2PH38J
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;