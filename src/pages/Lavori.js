import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Lavori.css';

const Lavori = () => {
  const [activeCategory, setActiveCategory] = useState("Tutti");

  const portfolioWorks = [
    { category: "Inferriate e Grate", title: "Inferriata Residenziale", image: "inferietaResidenziale.png" },
    { category: "Inferriate e Grate", title: "Inferriata su Vetrata", image: "inferietaSuVetrata1.png" },
    { category: "Inferriate e Grate", title: "Lavorazione Inferriata", image: "inferietaSuVetrataPrimadellalavorazione.png" },
    { category: "Inferriate e Grate", title: "Inferriata per Esterni", image: "inferietaportePerEsterno.png" },
    { category: "Inferriate e Grate", title: "Inferriata in Acciaio", image: "inferietaAcciatioFinestre.png" },
    { category: "Inferriate e Grate", title: "Inferriata per Finestra", image: "inferietaFinestraAcciaio.png" },
    { category: "Inferriate e Grate", title: "Costruzione Grata", image: "grateacciaoCostruzione01.png" },
    { category: "Inferriate e Grate", title: "Installazione Grata", image: "grateacciaoistallazione01.png" },
    { category: "Inferriate e Grate", title: "Riparazione Inferriata", image: "inferiata.jpeg" },
    { category: "Strutture e Lavorazioni", title: "Costruzione Scale", image: "costruzioneScale.png" },
    { category: "Strutture e Lavorazioni", title: "Soppalco in Acciaio", image: "soppalcoCasaAcciaio.png" },
    { category: "Strutture e Lavorazioni", title: "Costruzione Telaio", image: "CostruzioneTelaioAcciaio.png" },
    { category: "Strutture e Lavorazioni", title: "Costruzione Atelier", image: "costruzioneAtelierAcciaio.png" },
    { category: "Strutture e Lavorazioni", title: "Componente Custom", image: "FabbricazioneComponenteCustom.png" },
    { category: "Strutture e Lavorazioni", title: "Griglia a Pavimento", image: "grigliaPavimentoAcciaio.png" },
    { category: "Infissi e Serramenti", title: "Serramento per Finestra", image: "serramentaFinestra.png" },
    { category: "Infissi e Serramenti", title: "Serramento per Porta", image: "serramentaPorta.png" },
    { category: "Infissi e Serramenti", title: "Costruzione Serramento", image: "serramentaPortaCostruzione.png" },
    { category: "Infissi e Serramenti", title: "Zanzariere e Tapparelle", image: "sblocco.jpg" },
    { category: "Progetti Speciali", title: "Progetto Speciale CNR 1", image: "procettoCnnr01.png" },
    { category: "Progetti Speciali", title: "Progetto Speciale CNR 2", image: "procettoCnnr02.png" },
    { category: "Progetti Speciali", title: "Progetto Speciale CNR 3", image: "procettoCnnr03.png" },
    { category: "Progetti Speciali", title: "Demolizione Barcone Navigli 1", image: "demolizioneBarcaNavigli00.png" },
    { category: "Progetti Speciali", title: "Demolizione Barcone Navigli 2", image: "demolizioneBarcaNavigli01.png" },
    { category: "Progetti Speciali", title: "Demolizione Barcone Navigli 3", image: "demolizioneBarcaNavigli02.png" },
    { category: "Progetti Speciali", title: "Demolizione Barcone Navigli 4", image: "demolizioneBarcaNavigli03.png" },
    { category: "Cancelli e Recinzioni", title: "Recinzione Verde", image: "RecizioneMetallicaVerde.png" },
    { category: "Cancelli e Recinzioni", title: "Cancello in Acciaio", image: "cencelloEsternoAcciaio.png" },
    { category: "Cancelli e Recinzioni", title: "Cancello in Ferro", image: "Cancelli.jpeg" },
    { category: "Cancelli e Recinzioni", title: "Riparazione Cancelli", image: "riparazioneCancelli.jpg" },
    { category: "Serrature", title: "Porta Blindata", image: "portaBlindata.webp" },
    { category: "Serrature", title: "Apertura Porte", image: "aperturaPorte.jpg" },
    { category: "Altro", title: "Serranda Motorizzata", image: "serranda.webp" },
    { category: "Altro", title: "Tettoia", image: "tettoiaAlumminioPlexiglass.png" },
  ];

  const categories = ["Tutti", ...new Set(portfolioWorks.map(w => w.category))];

  const filteredPortfolio = activeCategory === "Tutti" 
    ? portfolioWorks 
    : portfolioWorks.filter(w => w.category === activeCategory);

  return (
    <div className="lavori-page pt-20">
      <Helmet>
        <title>I Nostri Lavori | Fabbro Milano Carratu' Aniello</title>
        <meta name="description" content="Esplora la galleria dei nostri progetti: inferriate, soppalchi in acciaio, infissi, porte blindate e cancelli." />
      </Helmet>

      {/* Progetto in Evidenza: Navigli */}
      <section className="featured-project-section" style={{ marginTop: '80px', backgroundColor: '#fff' }}>
        <div className="container">
          <div className="featured-project-wrapper">
            <div className="featured-project-gallery">
              <div className="featured-img-main">
                <img src={`${process.env.PUBLIC_URL}/images/demolizioneBarcaNavigli00.png`} alt="Demolizione Barcone Navigli Pavese" />
              </div>
              <div className="featured-img-sub">
                <img src={`${process.env.PUBLIC_URL}/images/demolizioneBarcaNavigli02.png`} alt="Barcone Navigli 2" />
                <img src={`${process.env.PUBLIC_URL}/images/demolizioneBarcaNavigli03.png`} alt="Barcone Navigli 3" />
              </div>
            </div>
            <div className="featured-project-content" style={{ paddingLeft: '20px' }}>
              <span className="section-subtitle">Dicono Di Noi sulla Stampa</span>
              <h2 className="section-title">Demolizione Grande Barca in Acciaio sui Navigli</h2>
              <div className="section-divider" style={{ margin: '0 0 20px 0' }}></div>
              <p>Siamo orgogliosi di aver preso parte a un progetto così imponente per la città di Milano: la complessa operazione di demolizione di un grande barcone in acciaio sul Naviglio Pavese.</p>
              <p>Un intervento che ha richiesto tutta la nostra esperienza in ambito di demolizioni controllate e lavorazione del ferro pesante. L'evento ha suscitato grande interesse ed è stato ripreso anche dalle testate giornalistiche locali.</p>
              <div className="press-link-container" style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', borderLeft: '4px solid var(--primary-gold)' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '10px' }}><i className="far fa-newspaper"></i> Leggi l'articolo completo su MilanoToday</h4>
                <a href="https://www.milanotoday.it/foto/cronaca/chiusi-barconi-naviglio-pavese/#barconi-navigli-sommozzatori-polizia-locale-foto-ricco.html" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-block', marginTop: '10px', fontSize: '0.9rem', padding: '10px 20px' }}>
                  Vai alla Notizia <i className="fas fa-external-link-alt" style={{ marginLeft: '5px' }}></i>
                </a>
              </div>
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

      {/* Portfolio section */}
      <section className="portfolio-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Galleria Lavori</span>
            <h2 className="section-title">Tutti i Nostri Progetti</h2>
            <div className="section-divider"></div>
            <p className="mt-3 text-muted text-center" style={{ maxWidth: '600px', margin: '20px auto 0' }}>
              Esplora i nostri progetti artigianali. Dalla costruzione di soppalchi e inferriate di design fino al pronto intervento su serrature.
            </p>
          </div>

          <div className="portfolio-filters">
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="portfolio-gallery full-gallery">
            {filteredPortfolio.map((work, idx) => (
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
        </div>
      </section>
    </div>
  );
};

export default Lavori;
