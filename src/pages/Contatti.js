import React from 'react'; // Rimosso useState perché non più usato per formData
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
  // formData, handleChange e handleSubmit rimossi perché il form non c'è più

  const position = [45.4773, 9.1815]; // Coordinate di Milano

  const handleWhatsAppClick = () => {
    // Numero di telefono per WhatsApp (sostituisci con il numero reale)
    const phoneNumber = "+393923842491"; // Esempio, da sostituire
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
          {/* La riga g-5 e le colonne sono state modificate per centrare la card delle info */}
          <div className="row g-5 justify-content-center">
            <div className="col-lg-8 col-md-10"> {/* Colonna più larga per centrare meglio la singola card */}
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
                    <p>+39 392 3842491</p> {/* Esempio, da sostituire */}
                  </div>
                </div>

                <div className="info-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h3>Email</h3>
                    <p>info@carratuaniello.it</p> {/* Esempio, da sostituire */}
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
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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

            {/* Rimossa la colonna del form "Inviaci un Messaggio" */}
            {/* <div className="col-lg-6">
              <div className="contatti-form-card">
                <h2>Inviaci un Messaggio</h2>
                <form>
                  // ... campi del form ...
                </form>
              </div>
            </div> 
            */}
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
              Carratu' Aniello <br /> Via Vergato 11, Milano
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Contatti;
