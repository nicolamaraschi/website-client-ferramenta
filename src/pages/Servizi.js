import React from 'react';
import './Servizi.css'; // Assicurati che il file CSS sia nella directory corretta

const Servizi = () => {
  return (
    <section id="servizi">
      <h2>I nostri servizi ✨</h2>
      <div className="services-grid">
        <div className="service-item">
        <img src="/manutenzione.jpeg" alt="Manutenzione impianti" />
          <h3>Manutenzione impianti 🔧</h3>
          <p>Servizi di manutenzione e assistenza su impianti industriali e domestici, con interventi rapidi e qualificati.</p>
        </div>
        <div className="service-item">
          <img src="/riparazione.jpeg" alt="Riparazioni specializzate" />
          <h3>Riparazioni specializzate ⚙️</h3>
          <p>Riparazioni di attrezzature e strumenti con garanzia di qualità e durabilità nel tempo. Assistenza su misura per ogni necessità.</p>
        </div>
        <div className="service-item">
          <img src="/consulenza.jpeg" alt="Consulenza tecnica" />
          <h3>Consulenza tecnica 🧠</h3>
          <p>Consulenza personalizzata per scegliere le migliori soluzioni tecniche e materiali per i tuoi progetti.</p>
        </div>
        <div className="service-item">
          <img src="/istallazione.jpeg" alt="Installazioni" />
          <h3>Installazioni 🛠️</h3>
          <p>Installazione di impianti e attrezzature con personale altamente qualificato, per garantirti sicurezza e affidabilità.</p>
        </div>
      </div>
    </section>
  );
};

export default Servizi;
