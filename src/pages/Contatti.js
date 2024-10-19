import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contatti.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Contatti = () => {
  const containerStyle = {
    width: '100%',
    height: '300px'
  };

  const center = {
    lat: 41.890251, // Coordinate di Roma
    lng: 12.492373
  };

  return (
    <div>
      {/* Sezione Contatti */}
      <section id="contatti" className="mt-5">
        <div className="contact-header text-center">
          <h2>Contattaci</h2>
        </div>
        <div className="container">
          <div className="row">
            {/* Primo box: Mappa */}
            <div className="col-md-4 mb-3">
              <h3>Dove Siamo</h3>
              <LoadScript
                googleMapsApiKey="YOUR_API_KEY" // Inserisci qui la tua API Key
              >
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={15}
                >
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            </div>

            {/* Secondo box: Dettagli Contatti */}
            <div className="col-md-4 mb-3">
              <h3>Informazioni di Contatto</h3>
              <p>Per informazioni o per richiedere un preventivo, contattaci tramite i seguenti recapiti:</p>
              <ul>
                <li><i className="fas fa-envelope"></i> Email: info@ferramentaabc.it</li>
                <li><i className="fas fa-phone-alt"></i> Telefono: +39 012 3456789</li>
                <li><i className="fas fa-map-marker-alt"></i> Indirizzo: Via Roma, 1, 00100 Roma, Italia</li>
              </ul>
            </div>

            {/* Terzo box: Modulo di Contatto */}
            <div className="col-md-4 mb-3">
              <h3>Modulo di Contatto</h3>
              <form>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" className="form-control mb-2" required />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" className="form-control mb-2" required />
                
                <label htmlFor="message">Messaggio:</label>
                <textarea id="message" name="message" className="form-control mb-2" rows="5" required></textarea>
                
                <button type="submit" className="btn btn-primary">Invia</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contatti;