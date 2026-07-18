import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  // Riferimento per le animazioni
  const heroRef = useRef(null);
  const serviceRefs = useRef([]);
  const statsRef = useRef(null);

  // Stato per tenere traccia del carosello attivo
  const [activeSlide, setActiveSlide] = useState({
    hero: 0,
    services: [0, 0, 0, 0, 0, 0]
  });

  const [activeNelloSlide, setActiveNelloSlide] = useState(0);

  const nelloImages = [
    "nelloFoto1.png",
    "nelloFoto2.png",
    "nelloFoto3.png",
    "nelloFoto4.png",
    "nelloFoto5.png",
    "fotoNelloCheLavora.png"
  ];

  const mainWorks = [
    { category: "Strutture e Lavorazioni", title: "Soppalco in Acciaio", image: "soppalcoCasaAcciaio.png" },
    { category: "Inferriate e Grate", title: "Inferriata Residenziale", image: "inferietaResidenziale.png" },
    { category: "Infissi e Serramenti", title: "Serramento per Finestra", image: "serramentaFinestra.png" },
    { category: "Cancelli e Recinzioni", title: "Cancello in Ferro", image: "Cancelli.jpeg" },
    { category: "Strutture e Lavorazioni", title: "Costruzione Scale", image: "costruzioneScale.png" },
    { category: "Progetti Speciali", title: "Demolizione Navigli", image: "demolizioneBarcaNavigli00.png" }
  ];

  // Schema Markup per Local Business / Fabbro
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    "name": "Carratu'Aniello Fabbro Milano",
    "image": `${process.env.PUBLIC_URL}/images/logoNuovo.png`,
    "telephone": "+393923842491",
    "url": "https://nicolamaraschi.github.io/website-client-ferramenta",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.4642,
      "longitude": 9.1900
    },
    "areaServed": {
      "@type": "City",
      "name": "Milano"
    },
    "priceRange": "€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "description": "Pronto intervento fabbro Milano 24h per apertura porte, cambio serrature, riparazione tapparelle e serrande."
  };

  // Stato per il bottone "torna su"
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);

  // Stato per le FAQ
  const [activeFaq, setActiveFaq] = useState(null);

  // Effetto per le animazioni al caricamento
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('animate');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsBackToTopVisible(true);
      } else {
        setIsBackToTopVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    const heroInterval = setInterval(() => {
      setActiveSlide(prev => ({
        ...prev,
        hero: (prev.hero + 1) % 3
      }));
    }, 7000);

    const servicesInterval = setInterval(() => {
      setActiveSlide((prev) => ({
        ...prev,
        services: prev.services.map((slide, index) => {
          const numImages = services[index].images.length;
          return (slide + 1) % numImages;
        })
      }));
    }, 5000);

    const nelloInterval = setInterval(() => {
      setActiveNelloSlide((prev) => (prev + 1) % nelloImages.length);
    }, 4000);

    return () => {
      clearInterval(heroInterval);
      clearInterval(servicesInterval);
      clearInterval(nelloInterval);
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [nelloImages.length]);

  const handleServiceSlideChange = (serviceIndex, slideIndex) => {
    setActiveSlide((prev) => {
      const newServicesSlides = [...prev.services];
      newServicesSlides[serviceIndex] = slideIndex;
      return { ...prev, services: newServicesSlides };
    });
  };


  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const services = [
    {
      title: "Pronto Intervento Apertura Porte",
      description: "Apertura porte bloccate senza scasso. Intervento rapido fabbro Milano centro e provincia.",
      images: ["riparazione.jpeg"]
    },
    {
      title: "Zanzariere, Tapparelle e Infissi",
      description: "Installazione e riparazione di zanzariere, tapparelle, infissi e tende da esterni.",
      images: ["serramentaFinestra.png", "serramentaPorta.png", "serramentaPortaCostruzione.png"]
    },
    {
      title: "Basculanti e Saracinesche Motorizzate",
      description: "Assistenza tecnica per porte basculanti per box auto e saracinesche negozi motorizzate.",
      images: ["serrande.jpg", "RecizioneMetallicaVerde.png", "Cancelli.jpeg"]
    },
    {
      title: "Demolizione e Soppalchi",
      description: "Demolizione e costruzione soppalchi su misura. Lavorazioni in ferro per ringhiere e balconi.",
      images: ["soppalcoCasaAcciaio.png", "riparazioneCancelli.jpg", "CostruzioneTelaioAcciaio.png", "costruzioneAtelierAcciaio.png", "FabbricazioneComponenteCustom.png", "grigliaPavimentoAcciaio.png", "procettoCnnr01.png", "demolizioneBarcaNavigli00.png", "demolizioneBarcaNavigli01.png", "demolizioneBarcaNavigli02.png", "demolizioneBarcaNavigli03.png"]
    },
    {
      title: "Riparazione Inferriate e Grate",
      description: "Installazione e riparazione inferriate di sicurezza per finestre e balconi a Milano.",
      images: ["inferietaResidenziale.png", "inferietaSuVetrata1.png", "inferietaSuVetrataPrimadellalavorazione.png", "inferietaportePerEsterno.png", "inferietaAcciatioFinestre.png", "inferietaFinestraAcciaio.png", "grateacciaoCostruzione01.png", "grateacciaoistallazione01.png", "inferiata.jpeg"]
    },
    {
      title: "Porte Blindate e Serrature",
      description: "Installazione porte blindate su misura. Cambio serrature immediato, conversione serratura doppia mappa a cilindro europeo.",
      images: ["inferietaportePerEsterno.png"]
    }
  ];

  const stats = [
    { count: 100, label: "Lavori Completati" },
    { count: 50, label: "Clienti Soddisfatti" },
    { count: 30, label: "Anni di Esperienza" }
  ];





  return (
    <div className="home-page">
      <Helmet>
        <title>Pronto Intervento Fabbro Milano 24h | Apertura Porte e Cambio Serrature</title>
        <meta name="description" content="Cerchi un Fabbro a Milano? Pronto Intervento Fabbro 24h per apertura porte bloccate, cambio serrature, sblocco tapparelle e serrande." />
        <link rel="canonical" href="https://nicolamaraschi.github.io/website-client-ferramenta" />
        <meta name="keywords" content="fabbro milano, pronto intervento fabbro milano, apertura porte milano, cambio serratura milano, fabbro urgente" />
      </Helmet>

      {/* JSON-LD Schema for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      {/* Hero section */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-slide active">
          <video autoPlay muted loop playsInline id="hero-video" className="hero-video">
            <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4" />
            Il tuo browser non supporta i video HTML5.
          </video>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Pronto Intervento Fabbro <br /> Milano e Provincia</h1>
            <p>Emergenza Fabbro 24h? Interveniamo in tutta Milano per apertura porte bloccate, cambio serrature e riparazioni urgenti.</p>
            <div className="hero-cta">
              <a href="tel:+393923842491" className="btn-primary" title="Chiama Subito Fabbro Milano">Chiama Ora: 392 3842491</a>
              <Link to="/preventivo" className="btn-secondary">Richiedi Preventivo</Link>
            </div>
          </div>
        </div>

        <div className="scroll-down">
          <span>Scorri per scoprire</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* Intro section */}
      <section className="intro-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Chi Siamo</span>
            <h2 className="section-title">Benvenuti alla Carratu'Aniello</h2>
            <div className="section-divider"></div>
          </div>

          <div className="intro-content">
            <div className="intro-text">
              <p>
                Il tuo <strong>Fabbro a Milano</strong> di fiducia per emergenze e sicurezza. 
                Offriamo <strong>pronto intervento 24h</strong> su tutta la provincia per <strong>apertura porte bloccate</strong>, <strong>sostituzione serrature</strong> e riparazioni urgenti.
              </p>
              <p>
                Interventi rapidi, professionalità garantita e massima sicurezza per la tua casa o azienda.
              </p>

              <div className="intro-features">
                <div className="feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Prodotti Certificati</span>
                </div>
                <div className="feature">
                  <i className="fas fa-tools"></i>
                  <span>Fabbri Esperti Milano</span>
                </div>
                <div className="feature">
                  <i className="fas fa-clock"></i>
                  <span>Pronto Intervento Rapido</span>
                </div>
              </div>

              <Link to="/servizi" className="btn-text">
                Scopri tutti i nostri servizi
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="intro-image">
              <img src={`${process.env.PUBLIC_URL}/images/logoNuovo.png`} alt="Fabbro Milano Pronto Intervento Carratu'Aniello" />
              <div className="intro-badge">
                <span className="years">30+</span>
                <span className="text">Anni di<br />Esperienza</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Il Nostro Mastro Fabbro Nello Section */}
      <section className="nello-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Il Nostro Esperto</span>
            <h2 className="section-title">Mastro Fabbro Nello</h2>
            <div className="section-divider"></div>
            <p className="nello-intro">Più di 30 anni di esperienza, dedizione e passione per l'artigianato del ferro.</p>
          </div>

          <div className="nello-carousel-container">
            <div className="nello-carousel-track" style={{ transform: `translateX(-${activeNelloSlide * 100}%)` }}>
              {nelloImages.map((img, idx) => (
                <div className="nello-slide" key={idx}>
                  <img src={`${process.env.PUBLIC_URL}/images/${img}`} alt={`Nello al lavoro ${idx + 1}`} />
                </div>
              ))}
            </div>
            
            <div className="nello-carousel-controls">
              <button className="carousel-arrow prev" onClick={() => setActiveNelloSlide((prev) => (prev - 1 + nelloImages.length) % nelloImages.length)}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="carousel-dots">
                {nelloImages.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    className={`carousel-dot ${activeNelloSlide === dotIndex ? 'active' : ''}`}
                    onClick={() => setActiveNelloSlide(dotIndex)}
                    aria-label={`Slide ${dotIndex + 1}`}
                  ></button>
                ))}
              </div>
              <button className="carousel-arrow next" onClick={() => setActiveNelloSlide((prev) => (prev + 1) % nelloImages.length)}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">I Nostri Servizi Fabbro</span>
            <h2 className="section-title">Soluzioni Urgenti e Sicurezza Milano</h2>
            <div className="section-divider"></div>
          </div>

          <div className="services-grid">
            {services.slice(0, 3).map((service, serviceIndex) => (
              <div
                key={serviceIndex}
                className="service-card"
                ref={el => serviceRefs.current[serviceIndex] = el}
              >
                <div className="service-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${service.images[0]}`}
                    alt={service.title}
                  />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to="/servizi" className="service-link">
                    Scopri di più <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/servizi" className="btn-primary">
              Tutti i Servizi
            </Link>
          </div>
        </div>
      </section>

      {/* Services showcase with carousel */}
      <section className="services-showcase">
        {services.map((service, index) => (
          <div
            key={index}
            className={`showcase-item ${index % 2 !== 0 ? 'reverse' : ''}`}
            ref={el => serviceRefs.current[index + 3] = el}
          >
            <div className="showcase-content">
              <span className="showcase-number">0{index + 1}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Link to="/servizi" className="btn-outline">
                Scopri di più
              </Link>
            </div>

            <div className="showcase-carousel">
              <div className="carousel-container">
                <div
                  className="carousel-track"
                  style={{ transform: `translateX(-${activeSlide.services[index] * 100}%)` }}
                >
                  {service.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="carousel-slide">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/${image}`}
                        alt={`${service.title} ${imgIndex + 1}`}
                      />
                    </div>
                  ))}
                </div>

                <div className="carousel-controls">
                  <button
                    className="carousel-arrow prev"
                    onClick={() => {
                      const newSlideIndex = (activeSlide.services[index] - 1 + service.images.length) % service.images.length;
                      handleServiceSlideChange(index, newSlideIndex);
                    }}
                    aria-label="Precedente"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>

                  <div className="carousel-dots">
                    {service.images.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        className={`carousel-dot ${activeSlide.services[index] === dotIndex ? 'active' : ''}`}
                        onClick={() => handleServiceSlideChange(index, dotIndex)}
                        aria-label={`Slide ${dotIndex + 1}`}
                      ></button>
                    ))}
                  </div>

                  <button
                    className="carousel-arrow next"
                    onClick={() => {
                      const newSlideIndex = (activeSlide.services[index] + 1) % service.images.length;
                      handleServiceSlideChange(index, newSlideIndex);
                    }}
                    aria-label="Successivo"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Call to action section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Emergenza Fabbro? Interveniamo Subito!</h2>
            <p>Hai la porta bloccata, serratura rotta o hai perso le chiavi? Il nostro servizio di pronto intervento è attivo per risolvere ogni tua urgenza in tempi rapidi.</p>
            <div className="cta-buttons">
              <a href="tel:+393923842491" className="btn-primary btn-call">
                <i className="fas fa-phone-alt"></i> Chiamaci Ora
              </a>
              <Link to="/preventivo" className="btn-secondary btn-quote">
                Richiedi Preventivo
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Progetto in Evidenza: CNR Bologna */}
      <section className="featured-project-section">
        <div className="container">
          <div className="featured-project-wrapper">
            <div className="featured-project-content">
              <span className="section-subtitle">Progetto in Evidenza</span>
              <h2 className="section-title">Lavori al CNR di Bologna</h2>
              <div className="section-divider" style={{ margin: '0 0 20px 0' }}></div>
              <p>Siamo orgogliosi di aver collaborato con il <strong>Consiglio Nazionale delle Ricerche (CNR) di Bologna</strong> per la realizzazione di strutture e componenti in acciaio su misura. Un progetto che testimonia la nostra capacità di soddisfare le esigenze di enti prestigiosi con la massima precisione e qualità sartoriale.</p>
              <ul className="featured-features">
                <li><i className="fas fa-check"></i> Progettazione su misura</li>
                <li><i className="fas fa-check"></i> Lavorazioni di precisione</li>
                <li><i className="fas fa-check"></i> Sicurezza e durabilità</li>
              </ul>
              <Link to="/preventivo" className="btn-primary mt-3">Richiedi un Progetto Simile</Link>
            </div>
            <div className="featured-project-gallery">
              <div className="featured-img-main">
                <img src={`${process.env.PUBLIC_URL}/images/procettoCnnr03.png`} alt="Progetto CNR Bologna 1" />
              </div>
              <div className="featured-img-sub">
                <img src={`${process.env.PUBLIC_URL}/images/procettoCnnr01.png`} alt="Progetto CNR Bologna 2" />
                <img src={`${process.env.PUBLIC_URL}/images/procettoCnnr02.png`} alt="Progetto CNR Bologna 3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio section - Home Preview */}
      <section className="portfolio-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Galleria Lavori</span>
            <h2 className="section-title">Lavori in Evidenza</h2>
            <div className="section-divider"></div>
          </div>

          <div className="portfolio-gallery">
            {mainWorks.map((work, idx) => (
              <div className="gallery-item" key={idx}>
                <img src={`${process.env.PUBLIC_URL}/images/${work.image}`} alt={work.title} />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h3>{work.title}</h3>
                    <p>{work.category}</p>
                    <span className="gallery-icon">
                      <i className="fas fa-search-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5" style={{ marginTop: '40px' }}>
            <Link to="/lavori" className="btn-outline">Vedi Tutti i Nostri Lavori</Link>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon">
                  <i className={`fas fa-${index === 0 ? 'clipboard-check' : index === 1 ? 'smile-beam' : 'award'}`}></i>
                </div>
                <div className="stat-content">
                  <div className="stat-number">
                    <span className="counter">{stat.count}</span>
                    <span className="plus">+</span>
                  </div>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>






      {/* Contact mini section - MODIFICATA */}
      <section className="contact-mini-section">
        <div className="container">
          <div className="contact-mini-wrapper">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-md-12">
                {/* Aggiunto style={{ margin: '0 auto' }} per centrare il blocco contact-mini-info */}
                <div className="contact-mini-info" style={{ margin: '0 auto' }}>
                  <h2>Contattaci per Qualsiasi Informazione</h2>
                  <p>Siamo a tua disposizione per offrirti consulenza, supporto e preventivi gratuiti per tutti i tuoi progetti.</p>

                  <div className="contact-mini-details">
                    <div className="mini-detail">
                      <div className="detail-icon">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <div className="detail-content">
                        <h3>Telefono</h3>
                        <p>+39 392 3842491</p>
                      </div>
                    </div>

                    <div className="mini-detail">
                      <div className="detail-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="detail-content">
                        <h3>Email</h3>
                        <p>info@carratuaniello.it<br />supporto@carratuaniello.it</p>
                      </div>
                    </div>

                    <div className="mini-detail">
                      <div className="detail-icon">
                        <i className="fas fa-clock"></i>
                      </div>
                      <div className="detail-content">
                        <h3>Orari</h3>
                        <p>Pronto Intervento:<br />24h su 24, 7 giorni su 7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Back to top button */}
      {isBackToTopVisible && (
        <button
          className="back-to-top visible"
          onClick={scrollToTop}
          aria-label="Torna in cima"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      )}
    </div>
  );
};

export default Home;
