import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Contatti.css';

// Fix per icone Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Contatti = () => {
  const position = [45.4773, 9.1815]; // Milano

  const handleWhatsAppClick = () => {
    const phoneNumber = "+393923842491"; 
    const message = "Ciao! Sono interessato ai vostri servizi di pronto intervento.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="contatti-page">
      <section className="contatti-hero">
        <div 
          className="contatti-hero-bg" 
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/consulenza.jpeg)` }}
        ></div>
        <div className="contatti-hero-content">
          <h1>Contatti</h1>
          <p>Siamo a tua disposizione 24/7. Chiamaci o scrivici per un intervento rapido a Milano e provincia.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="contatti-main">
        <div className="container">
          <div className="row g-5 align-items-center">
            
            {/* Left: Contact Info */}
            <div className="col-lg-5">
              <div className="premium-contact-card">
                <div className="card-header">
                  <h2>I Nostri Recapiti</h2>
                  <div className="accent-line"></div>
                </div>

                <div className="contact-details">
                  <div className="contact-item">
                    <div className="icon-box">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="item-text">
                      <h4>Sede Operativa</h4>
                      <p>Via Vergato 11, 20161 Milano (MI)</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="icon-box">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="item-text">
                      <h4>Pronto Intervento</h4>
                      <p className="highlight-text">+39 392 3842491</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="icon-box">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="item-text">
                      <h4>Email</h4>
                      <p>info@carratuaniello.it</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="icon-box">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div className="item-text">
                      <h4>Orari di Lavoro</h4>
                      <p>Lunedì - Venerdì: 9:00 - 18:00<br/>Sabato: 9:00 - 13:00<br/><strong>Emergenze: 24h/24</strong></p>
                    </div>
                  </div>
                </div>

                <button className="premium-whatsapp-btn" onClick={handleWhatsAppClick}>
                  <i className="fab fa-whatsapp"></i> Chat su WhatsApp
                </button>
              </div>
            </div>

            {/* Right: Map */}
            <div className="col-lg-7">
              <div className="premium-map-wrapper">
                <MapContainer
                  center={position}
                  zoom={13}
                  scrollWheelZoom={false}
                  className="leaflet-premium-map"
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a>'
                  />
                  <Marker position={position}>
                    <Popup>
                      <strong>Carratu' Aniello</strong><br/>Via Vergato 11, Milano
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contatti;
