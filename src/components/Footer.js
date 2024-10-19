import React from 'react';
import './Footer.css'; // Assicurati di includere il CSS appropriato

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3">
            <h5 className="footer-heading">Pagine</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="/main" className="text-white">🏠 Home</a></li>
              <li><a href="/servizi" className="text-white">🔧 Servizi</a></li>
              <li><a href="/contatti" className="text-white">📞 Contatti</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <h5 className="footer-heading">Contatti</h5>
            <p className="footer-contact">
              Ferramenta ABC<br />
              Via Roma 123, 00100 Roma, Italia<br />
              📞 Telefono: +39 06 1234567<br />
              ✉️ Email: <a href="mailto:info@ferramentaabc.it" className="text-white">info@ferramentaabc.it</a>
            </p>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <h5 className="footer-heading">Privacy</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="/privacy" className="text-white">🔒 Informativa Privacy</a></li>
              <li><a href="/cookie" className="text-white">🍪 Politica sui Cookie</a></li>
              <li><a href="/termini" className="text-white">📜 Termini di Servizio</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <h5 className="footer-heading">Seguici</h5>
            <div className="footer-social">
              <a href="https://facebook.com" className="text-white" aria-label="Facebook" target="_blank" rel="noopener noreferrer">👍 Facebook</a><br />
              <a href="https://twitter.com" className="text-white" aria-label="Twitter" target="_blank" rel="noopener noreferrer">🐦 Twitter</a><br />
              <a href="https://instagram.com" className="text-white" aria-label="Instagram" target="_blank" rel="noopener noreferrer">📸 Instagram</a><br />
              <a href="https://linkedin.com" className="text-white" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
            </div>
          </div>
        </div>
        <hr className="bg-white" />
        <div className="text-center py-2">
          <p className="mb-0">&copy; 2024 Ferramenta ABC. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
