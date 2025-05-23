import React, { useState, useEffect, useRef } from 'react';
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
  
  // Stato per il floating contact menu
  const [isContactOpen, setIsContactOpen] = useState(false);
  
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
        services: prev.services.map((slide) => (slide + 1) % 3) 
      }));
    }, 5000); 
    
    return () => {
      clearInterval(heroInterval);
      clearInterval(servicesInterval);
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  
  const handleServiceSlideChange = (serviceIndex, slideIndex) => {
    setActiveSlide((prev) => {
      const newServicesSlides = [...prev.services];
      newServicesSlides[serviceIndex] = slideIndex;
      return { ...prev, services: newServicesSlides };
    });
  };
  
  const toggleContactMenu = () => {
    setIsContactOpen(!isContactOpen);
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
      title: "Serramenti di Sicurezza",
      description: "Soluzioni anche automatizzate per garantire la massima sicurezza della tua casa o azienda.",
      images: ["serramenti.webp", "serramenti.webp", "serramenti.webp"] 
    },
    {
      title: "Porte Blindate",
      description: "Offriamo porte blindate di alta qualità per proteggere i tuoi spazi con stile e sicurezza.",
      images: ["portaBlindata.webp", "portaBlindata.webp", "portaBlindata.webp"]
    },
    {
      title: "Inferriate di Sicurezza",
      description: "Inferriate robuste e affidabili per una protezione efficace contro le intrusioni.",
      images: ["inferiata.jpeg", "inferiata.jpeg", "inferiata.jpeg"]
    },
    {
      title: "Cancelli e Recinzioni",
      description: "Cancelli e recinzioni personalizzate per delimitare e proteggere le tue proprietà.",
      images: ["Cancelli.jpeg", "Cancelli.jpeg", "Cancelli.jpeg"]
    },
    {
      title: "Tapparelle e Persiane Blindate",
      description: "Soluzioni blindate per finestre che uniscono sicurezza e funzionalità.",
      images: ["tapparelle.jpg", "tapparelle.jpg", "tapparelle.jpg"]
    },
    {
      title: "Serrande e Basculanti",
      description: "Installazione e manutenzione di serrande e basculanti per garage e spazi commerciali.",
      images: ["serranda.webp", "serranda.webp", "serranda.webp"]
    }
  ];
  
  const stats = [
    { count: 100, label: "Lavori Completati" },
    { count: 50, label: "Clienti Soddisfatti" },
    { count: 10, label: "Anni di Esperienza" }
  ];
  
  const testimonials = [
    {
      quote: "Eccellente servizio e prodotti di alta qualità. Consiglio vivamente!",
      author: "Maria Rossi",
      position: "Cliente privato"
    },
    {
      quote: "Ho trovato tutto ciò di cui avevo bisogno, e il personale è molto competente.",
      author: "Luigi Bianchi",
      position: "Proprietario di negozio"
    },
    {
      quote: "Servizio impeccabile, sono intervenuti in tempi brevissimi per risolvere un problema urgente.",
      author: "Anna Verdi",
      position: "Amministratrice di condominio"
    }
  ];
  
  const faqs = [
    {
      question: "Quali sono i vostri orari di apertura?",
      answer: "Siamo aperti dal lunedì al venerdì dalle 9:00 alle 18:00 e il sabato dalle 9:00 alle 13:00."
    },
    {
      question: "Offrite servizi di installazione?",
      answer: "Sì, offriamo servizi professionali di installazione per tutti i prodotti che vendiamo."
    },
    {
      question: "Quali zone coprite con i vostri servizi?",
      answer: "Operiamo principalmente a Milano e provincia, ma possiamo estendere i nostri servizi anche nelle province limitrofe."
    }
  ];
  
  return (
    <div className="home-page">
      {/* Hero section */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-slide active"> 
          <video autoPlay muted loop id="hero-video" className="hero-video">
            <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4" />
            Il tuo browser non supporta i video HTML5.
          </video>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Sicurezza e Qualità <br/> per la Tua Casa</h1>
            <p>Soluzioni professionali per la sicurezza della tua abitazione e del tuo business</p>
            <div className="hero-cta">
              <Link to="/preventivo" className="btn-primary">Richiedi Preventivo</Link>
              <Link to="/contatti" className="btn-secondary">Contattaci</Link>
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
                Da oltre 10 anni, la <strong>Carratu'Aniello</strong> è il punto di riferimento per tutte le tue necessità 
                di sicurezza, manutenzione e installazione. Offriamo prodotti di alta qualità 
                e servizi professionali per garantire la sicurezza e la funzionalità della tua casa o azienda.
              </p>
              <p>
                Il nostro team di esperti è sempre pronto a consigliarti le soluzioni più adatte 
                alle tue esigenze, con attenzione alla qualità e al design.
              </p>
              
              <div className="intro-features">
                <div className="feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Prodotti Certificati</span>
                </div>
                <div className="feature">
                  <i className="fas fa-tools"></i>
                  <span>Installazione Professionale</span>
                </div>
                <div className="feature">
                  <i className="fas fa-headset"></i>
                  <span>Assistenza Continua</span>
                </div>
              </div>
              
              <Link to="/servizi" className="btn-text">
                Scopri tutti i nostri servizi
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            
            <div className="intro-image">
              <img src={`${process.env.PUBLIC_URL}/images/logo2.png`} alt="Logo Carratu'Aniello" /> 
              <div className="intro-badge">
                <span className="years">10+</span>
                <span className="text">Anni di<br/>Esperienza</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services preview */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">I Nostri Servizi</span>
            <h2 className="section-title">Soluzioni per la Tua Sicurezza</h2>
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
                  style={{transform: `translateX(-${activeSlide.services[index] * 100}%)`}}
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
            <h2>Hai bisogno di un intervento urgente?</h2>
            <p>Contattaci subito per una consulenza gratuita o richiedi un preventivo per i tuoi progetti.</p>
            <div className="cta-buttons">
              <a href="tel:+390612345678" className="btn-primary btn-call"> 
                <i className="fas fa-phone-alt"></i> Chiamaci Ora
              </a>
              <Link to="/preventivo" className="btn-secondary btn-quote">
                Richiedi Preventivo
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio section */}
      <section className="portfolio-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Galleria</span>
            <h2 className="section-title">I Nostri Recenti Lavori</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="portfolio-gallery">
            <div className="gallery-item">
              <img src={`${process.env.PUBLIC_URL}/images/Cancelli.jpeg`} alt="Installazione Cancello" />
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h3>Installazione Cancello</h3>
                  <p>Milano, 2023</p>
                  <span className="gallery-icon">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="gallery-item">
              <img src={`${process.env.PUBLIC_URL}/images/portaBlindata.webp`} alt="Porta Blindata Moderna" />
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h3>Porta Blindata Moderna</h3>
                  <p>Milano, 2023</p>
                  <span className="gallery-icon">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
              </div>
            </div>
            
             <div className="gallery-item">
              <img src={`${process.env.PUBLIC_URL}/images/serramenti.webp`} alt="Serramenti di Sicurezza" />
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h3>Serramenti di Sicurezza</h3>
                  <p>Milano, 2023</p>
                  <span className="gallery-icon">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="gallery-item">
              <img src={`${process.env.PUBLIC_URL}/images/tapparelle.jpg`} alt="Tapparelle Automatizzate" />
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h3>Tapparelle Automatizzate</h3>
                  <p>Milano, 2023</p>
                  <span className="gallery-icon">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="gallery-item">
              <img src={`${process.env.PUBLIC_URL}/images/inferiata.jpeg`} alt="Inferriata Decorativa" />
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h3>Inferriata Decorativa</h3>
                  <p>Milano, 2022</p>
                  <span className="gallery-icon">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="gallery-item">
              <img src={`${process.env.PUBLIC_URL}/images/serranda.webp`} alt="Serranda Commerciale" />
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h3>Serranda Commerciale</h3>
                  <p>Milano, 2022</p>
                  <span className="gallery-icon">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
              </div>
            </div>
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
      
      {/* Testimonials section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Testimonianze</span>
            <h2 className="section-title">Cosa Dicono i Nostri Clienti</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="testimonials-carousel"> 
            <div className="testimonials-track">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-item">
                  <div className="testimonial-content">
                    <div className="quote-icon">
                      <i className="fas fa-quote-right"></i>
                    </div>
                    <p className="testimonial-text">{testimonial.quote}</p>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <div className="avatar-initials">
                          {testimonial.author.split(' ').map(name => name[0]).join('')}
                        </div>
                      </div>
                      <div className="author-info">
                        <h4>{testimonial.author}</h4>
                        <span>{testimonial.position}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Domande Frequenti</span>
            <h2 className="section-title">Hai delle Domande?</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <h3>{faq.question}</h3>
                  <span className="faq-icon">
                    <i className={`fas ${activeFaq === index ? 'fa-minus' : 'fa-plus'}`}></i>
                  </span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="faq-more text-center">
            <p>Non hai trovato la risposta che cercavi?</p>
            <Link to="/contatti" className="btn-primary">Contattaci</Link>
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
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="detail-content">
                        <h3>Indirizzo</h3>
                        <p>Via Vergato 11<br />20161 Milano, MI</p>
                      </div>
                    </div>
                    
                    <div className="mini-detail">
                      <div className="detail-icon">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <div className="detail-content">
                        <h3>Telefono</h3>
                        <p>+39 06 1234567<br />+39 333 1234567</p> 
                      </div>
                    </div>
                    
                    <div className="mini-detail">
                      <div className="detail-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="detail-content">
                        <h3>Email</h3>
                        <p>info@ferramentaabc.it<br />supporto@ferramentaabc.it</p> 
                      </div>
                    </div>
                    
                    <div className="mini-detail">
                      <div className="detail-icon">
                        <i className="fas fa-clock"></i>
                      </div>
                      <div className="detail-content">
                        <h3>Orari</h3>
                        <p>Lun-Ven: 9:00 - 18:00<br />Sab: 9:00 - 13:00</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="contact-mini-social">
                    <h3>Seguici</h3>
                    <div className="social-links">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">I Nostri Partner</span>
            <h2 className="section-title">Collaboriamo con i Migliori</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="partners-slider"> 
            <div className="partner-item">
              <div className="partner-logo">Partner 1</div> 
            </div>
            <div className="partner-item">
              <div className="partner-logo">Partner 2</div>
            </div>
            <div className="partner-item">
              <div className="partner-logo">Partner 3</div>
            </div>
            <div className="partner-item">
              <div className="partner-logo">Partner 4</div>
            </div>
            <div className="partner-item">
              <div className="partner-logo">Partner 5</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Contact Floating Button */}
      <div className={`floating-contact ${isContactOpen ? 'active' : ''}`}>
        <div className="contact-bubble whatsapp">
          <a href="https://wa.me/390612345678" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"> 
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
        <div className="contact-bubble phone">
          <a href="tel:+390612345678" aria-label="Chiama"> 
            <i className="fas fa-phone-alt"></i>
          </a>
        </div>
        <div className="contact-bubble email">
          <a href="mailto:info@ferramentaabc.it" aria-label="Email"> 
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <button className={`contact-toggle ${isContactOpen ? 'active' : ''}`} onClick={toggleContactMenu} aria-expanded={isContactOpen} aria-label="Apri menu contatti rapidi">
          <i className={`fas ${isContactOpen ? 'fa-times' : 'fa-plus'}`}></i> 
        </button>
      </div>
      
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
