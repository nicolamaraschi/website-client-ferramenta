import React from 'react';
import './Contatti.css';

const Contatti = () => {

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
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="premium-contact-card text-center" style={{ padding: '40px' }}>
                <div className="card-header">
                  <h2>I Nostri Recapiti</h2>
                  <div className="accent-line mx-auto"></div>
                </div>

                <div className="contact-details d-flex flex-column align-items-center">
                  <div className="contact-item w-100 justify-content-center">
                    <div className="icon-box">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="item-text text-start ms-3">
                      <h4>Pronto Intervento</h4>
                      <p className="highlight-text">+39 392 3842491</p>
                    </div>
                  </div>

                  <div className="contact-item w-100 justify-content-center">
                    <div className="icon-box">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="item-text text-start ms-3">
                      <h4>Email</h4>
                      <p>info@carratuaniello.it</p>
                    </div>
                  </div>

                  <div className="contact-item w-100 justify-content-center">
                    <div className="icon-box">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div className="item-text text-start ms-3">
                      <h4>Orari di Lavoro</h4>
                      <p>Pronto Intervento: 24h su 24, 7 giorni su 7</p>
                    </div>
                  </div>
                </div>

                <button className="premium-whatsapp-btn mt-4" onClick={handleWhatsAppClick}>
                  <i className="fab fa-whatsapp"></i> Chat su WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contatti;
