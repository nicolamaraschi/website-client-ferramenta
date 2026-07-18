import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Servizi.css';

const Servizi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Pronto Intervento Apertura Porte",
      description: "Apertura porte bloccate senza scasso. Intervento rapido fabbro Milano centro e provincia. Tecniche avanzate per non danneggiare infissi e serrature.",
      image: "serramentaPorta.png",
      icon: "fa-door-open"
    },
    {
      title: "Zanzariere, Tapparelle e Infissi",
      description: "Installazione e riparazione di zanzariere, tapparelle, infissi e tende da esterni. Sostituzione cinghie e motorizzazione tapparelle per la tua comodità.",
      image: "serramentaFinestra.png",
      icon: "fa-window-maximize"
    },
    {
      title: "Basculanti e Saracinesche Motorizzate",
      description: "Assistenza tecnica per porte basculanti per box auto e saracinesche negozi motorizzate. Riparazioni urgenti per non bloccare mai la tua attività.",
      image: "serrande.jpg",
      icon: "fa-warehouse"
    },
    {
      title: "Demolizione e Soppalchi",
      description: "Demolizione e costruzione soppalchi su misura. Lavorazioni in ferro artigianali per ringhiere e balconi, unendo design e massima robustezza.",
      image: "soppalcoCasaAcciaio.png",
      icon: "fa-hammer"
    },
    {
      title: "Riparazione Inferriate e Grate",
      description: "Installazione e riparazione inferriate di sicurezza per finestre e balconi a Milano. Metti in sicurezza la tua casa con prodotti certificati antieffrazione.",
      image: "inferietaResidenziale.png",
      icon: "fa-shield-alt"
    },
    {
      title: "Porte Blindate e Serrature",
      description: "Installazione porte blindate su misura. Cambio serrature immediato, aggiornamento e conversione da vecchia serratura a doppia mappa a cilindro europeo ad alta sicurezza.",
      image: "serramentaPortaCostruzione.png",
      icon: "fa-key"
    }
  ];

  return (
    <div className="servizi-page">
      <Helmet>
        <title>Servizi Fabbro Milano | Apertura Porte, Serrature, Tapparelle</title>
        <meta name="description" content="Scopri tutti i servizi del Fabbro Milano Carratù Aniello: pronto intervento, apertura porte, zanzariere, soppalchi, inferriate e saracinesche." />
      </Helmet>

      {/* Hero Section */}
      <section className="servizi-hero">
        <div className="servizi-hero-content">
          <h1>I Nostri Servizi</h1>
          <p>Professionalità, precisione e intervento rapido per garantirti la massima sicurezza 24 ore su 24.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="servizi-list-section">
        <div className="container">
          <div className="servizi-grid">
            {services.map((service, index) => (
              <div className="servizi-card" key={index}>
                <div className="servizi-card-image">
                  <img src={`${process.env.PUBLIC_URL}/images/${service.image}`} alt={service.title} />
                  <div className="servizi-icon">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                </div>
                <div className="servizi-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to="/preventivo" className="servizi-btn">
                    Richiedi Preventivo <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="servizi-cta">
        <div className="container">
          <h2>Hai un'emergenza o vuoi un sopralluogo?</h2>
          <p>Il nostro team di esperti è pronto ad aiutarti per qualsiasi problema di sicurezza o riparazione.</p>
          <div className="cta-actions">
            <a href="tel:+393923842491" className="btn-call">
              <i className="fas fa-phone-alt"></i> Chiama Ora 
            </a>
            <Link to="/contatti" className="btn-contact">
              Contattaci
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servizi;