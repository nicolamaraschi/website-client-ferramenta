import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Contatti.css';

// Corregge il problema delle icone di Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Contatti = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const position = [45.4773, 9.1815]; // Coordinate di Milano

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui puoi aggiungere la logica per inviare il form
    console.log("Form submitted:", formData);
    alert("Messaggio inviato con successo! Ti contatteremo presto.");
    // Resetta il form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleWhatsAppClick = () => {
    // Numero di telefono per WhatsApp (sostituisci con il numero reale)
    const phoneNumber = "+390123456789";
    // Messaggio predefinito (opzionale)
    const message = "Ciao! Sono interessato ai vostri servizi.";
    // Crea URL per WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // Apri WhatsApp in una nuova finestra
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="contatti-container">
      <div className="contatti-hero">
        <div className="contatti-overlay"></div>
        <h1>Contatti</h1>
        <p>Siamo qui per aiutarti. Contattaci per qualsiasi informazione o preventivo.</p>
      </div>

      <div className="contatti-content">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="contatti-info-card">
                <h2>I Nostri Contatti</h2>
                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h3>Indirizzo</h3>
                    <p>Via Vergato 11, 20161 Milano MI</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <i className="fas fa-phone-alt"></i>
                  <div>
                    <h3>Telefono</h3>
                    <p>+39 06 1234567</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h3>Email</h3>
                    <p>info@ferramentaabc.it</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <i className="fas fa-clock"></i>
                  <div>
                    <h3>Orari</h3>
                    <p>Lun-Ven: 9:00-18:00<br />Sab: 9:00-13:00</p>
                  </div>
                </div>
                
                <div className="social-links">
                  <h3>Seguici sui Social</h3>
                  <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                
                <button 
                  className="whatsapp-button" 
                  onClick={handleWhatsAppClick}
                >
                  <i className="fab fa-whatsapp"></i> Contattaci su WhatsApp
                </button>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="contatti-form-card">
                <h2>Inviaci un Messaggio</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Nome Completo"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="name">Nome Completo</label>
                  </div>
                  
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Messaggio"
                      style={{ height: "150px" }}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <label htmlFor="message">Messaggio</label>
                  </div>
                  
                  <button type="submit" className="btn-submit">Invia Messaggio</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map-container">
        <MapContainer 
          center={position} 
          zoom={13} 
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              Carratu' Aniello <br/> Via Vergato 11, Milano
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Contatti;