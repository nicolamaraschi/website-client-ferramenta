import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/main">Ferramenta ABC</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/main">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/servizi">Servizi</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contatti">Contatti</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/preventivo">Preventivo</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;