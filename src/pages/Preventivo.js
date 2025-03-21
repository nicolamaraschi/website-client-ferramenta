import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './Preventivo.css';

const Preventivo = () => {
  // Stato iniziale del form
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    tipologia: '',
    descrizione: '',
    data: '',
    ora: '',
    privacy: false,
    urgente: false
  });
  
  // Stato per gestire gli errori di validazione
  const [errors, setErrors] = useState({});
  
  // Stato per gestire l'invio del form
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  
  // Gestisce il cambio dei valori del form
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Resetta l'errore per il campo corrente quando viene modificato
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  // Gestisce la verifica del reCAPTCHA
  const handleRecaptchaChange = (value) => {
    setRecaptchaVerified(!!value);
    if (errors.recaptcha) {
      setErrors({
        ...errors,
        recaptcha: null
      });
    }
  };
  
  // Validazione del form
  const validateForm = () => {
    const newErrors = {};
    
    // Valida il nome
    if (!formData.nome.trim()) {
      newErrors.nome = 'Il nome è obbligatorio';
    }
    
    // Valida il cognome
    if (!formData.cognome.trim()) {
      newErrors.cognome = 'Il cognome è obbligatorio';
    }
    
    // Valida l'email
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Indirizzo email non valido';
    }
    
    // Valida il telefono (se inserito)
    if (formData.telefono.trim() && !/^[+]?[0-9\s]*$/.test(formData.telefono)) {
      newErrors.telefono = 'Numero di telefono non valido';
    }
    
    // Valida la tipologia
    if (!formData.tipologia) {
      newErrors.tipologia = 'La tipologia di lavoro è obbligatoria';
    }
    
    // Valida la descrizione
    if (!formData.descrizione.trim()) {
      newErrors.descrizione = 'La descrizione è obbligatoria';
    } else if (formData.descrizione.trim().length < 10) {
      newErrors.descrizione = 'La descrizione deve contenere almeno 10 caratteri';
    }
    
    // Valida la data
    if (!formData.data) {
      newErrors.data = 'La data è obbligatoria';
    } else {
      const selectedDate = new Date(formData.data);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.data = 'Non puoi selezionare una data passata';
      }
    }
    
    // Valida l'ora
    if (!formData.ora) {
      newErrors.ora = 'L\'ora è obbligatoria';
    }
    
    // Valida la privacy
    if (!formData.privacy) {
      newErrors.privacy = 'Devi accettare la privacy policy';
    }
    
    // Valida reCAPTCHA
    if (!recaptchaVerified) {
      newErrors.recaptcha = 'Verifica di non essere un robot';
    }
    
    return newErrors;
  };
  
  // Gestisce l'invio del form
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Valida il form
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulazione dell'invio del form (sostituire con chiamata API reale)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset del form dopo l'invio con successo
      setFormData({
        nome: '',
        cognome: '',
        email: '',
        telefono: '',
        tipologia: '',
        descrizione: '',
        data: '',
        ora: '',
        privacy: false,
        urgente: false
      });
      
      setSubmitSuccess(true);
      setRecaptchaVerified(false);
      
      // Nascondi il messaggio di successo dopo 5 secondi
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Errore durante l\'invio del modulo:', error);
      setErrors({
        form: 'Si è verificato un errore durante l\'invio del modulo. Riprova più tardi.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Opzioni per il select della tipologia di lavoro
  const tipiDiLavoro = [
    { value: '', label: 'Seleziona...' },
    { value: 'riparazione-porte', label: 'Riparazione Porte' },
    { value: 'installazione-serrature', label: 'Installazione Serrature' },
    { value: 'sostituzione-cilindri', label: 'Sostituzione Cilindri' },
    { value: 'apertura-porte', label: 'Apertura Porte' },
    { value: 'riparazione-tapparelle', label: 'Riparazione Tapparelle' },
    { value: 'manutenzione', label: 'Manutenzione Preventiva' },
    { value: 'altro', label: 'Altro (specificare nella descrizione)' }
  ];
  
  return (
    <div className="preventivo-container">
      <div className="preventivo-header">
        <h1>Richiedi un Preventivo</h1>
        <p>Compila il modulo sottostante per richiedere un preventivo personalizzato</p>
      </div>
      
      <div className="container">
        <div className="preventivo-form-wrapper">
          {submitSuccess && (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <strong>Preventivo richiesto con successo!</strong> Ti contatteremo al più presto.
              <button type="button" className="btn-close" onClick={() => setSubmitSuccess(false)}></button>
            </div>
          )}
          
          {errors.form && (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              {errors.form}
              <button type="button" className="btn-close" onClick={() => setErrors({...errors, form: null})}></button>
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-card">
                  <h3>Informazioni Personali</h3>
                  
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className={`form-control ${errors.nome ? 'is-invalid' : ''}`}
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Nome"
                      disabled={isSubmitting}
                    />
                    <label htmlFor="nome">Nome *</label>
                    {errors.nome && <div className="invalid-feedback">{errors.nome}</div>}
                  </div>
                  
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className={`form-control ${errors.cognome ? 'is-invalid' : ''}`}
                      id="cognome"
                      name="cognome"
                      value={formData.cognome}
                      onChange={handleChange}
                      placeholder="Cognome"
                      disabled={isSubmitting}
                    />
                    <label htmlFor="cognome">Cognome *</label>
                    {errors.cognome && <div className="invalid-feedback">{errors.cognome}</div>}
                  </div>
                  
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      disabled={isSubmitting}
                    />
                    <label htmlFor="email">Email *</label>
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  
                  <div className="form-floating mb-3">
                    <input
                      type="tel"
                      className={`form-control ${errors.telefono ? 'is-invalid' : ''}`}
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="Telefono"
                      disabled={isSubmitting}
                    />
                    <label htmlFor="telefono">Telefono</label>
                    {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="form-card">
                  <h3>Dettagli Richiesta</h3>
                  
                  <div className="form-floating mb-3">
                    <select
                      className={`form-select ${errors.tipologia ? 'is-invalid' : ''}`}
                      id="tipologia"
                      name="tipologia"
                      value={formData.tipologia}
                      onChange={handleChange}
                      aria-label="Tipologia di lavoro"
                      disabled={isSubmitting}
                    >
                      {tipiDiLavoro.map((tipo) => (
                        <option 
                          key={tipo.value} 
                          value={tipo.value}
                          disabled={tipo.value === ''}
                        >
                          {tipo.label}
                        </option>
                      ))}
                    </select>
                    <label htmlFor="tipologia">Tipologia di Lavoro *</label>
                    {errors.tipologia && <div className="invalid-feedback">{errors.tipologia}</div>}
                  </div>
                  
                  <div className="form-floating mb-3">
                    <textarea
                      className={`form-control ${errors.descrizione ? 'is-invalid' : ''}`}
                      id="descrizione"
                      name="descrizione"
                      value={formData.descrizione}
                      onChange={handleChange}
                      placeholder="Descrizione"
                      style={{height: "120px"}}
                      disabled={isSubmitting}
                    ></textarea>
                    <label htmlFor="descrizione">Descrizione *</label>
                    {errors.descrizione && <div className="invalid-feedback">{errors.descrizione}</div>}
                  </div>
                  
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="date"
                          className={`form-control ${errors.data ? 'is-invalid' : ''}`}
                          id="data"
                          name="data"
                          value={formData.data}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          disabled={isSubmitting}
                        />
                        <label htmlFor="data">Data Preferita *</label>
                        {errors.data && <div className="invalid-feedback">{errors.data}</div>}
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="time"
                          className={`form-control ${errors.ora ? 'is-invalid' : ''}`}
                          id="ora"
                          name="ora"
                          value={formData.ora}
                          onChange={handleChange}
                          disabled={isSubmitting}
                        />
                        <label htmlFor="ora">Ora Preferita *</label>
                        {errors.ora && <div className="invalid-feedback">{errors.ora}</div>}
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-check form-switch mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="urgente"
                      name="urgente"
                      checked={formData.urgente}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    <label className="form-check-label" htmlFor="urgente">Richiesta urgente (entro 24h)</label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="form-card mt-4">
              <div className="mb-3">
                <ReCAPTCHA
                  sitekey="6Ld2VF8pAAAAAJz0kP1nXHcXs_h_lSVUQ1G-gB_P"
                  onChange={handleRecaptchaChange}
                  theme="light"
                />
                {errors.recaptcha && <div className="text-danger mt-2">{errors.recaptcha}</div>}
              </div>
              
              <div className="form-check mb-3">
                <input
                  className={`form-check-input ${errors.privacy ? 'is-invalid' : ''}`}
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                <label className="form-check-label" htmlFor="privacy">
                  Accetto la <a href="/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a> *
                </label>
                {errors.privacy && <div className="invalid-feedback">{errors.privacy}</div>}
              </div>
              
              <button 
                type="submit" 
                className="btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Invio in corso...
                  </>
                ) : 'Richiedi Preventivo'}
              </button>
            </div>
          </form>
        </div>
        
        <div className="preventivo-info mt-5">
          <div className="row">
            <div className="col-md-4">
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h4>Risposta Rapida</h4>
                <p>Riceverai una risposta entro 24 ore lavorative dalla tua richiesta.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-file-invoice-dollar"></i>
                </div>
                <h4>Preventivo Gratuito</h4>
                <p>Il nostro servizio di preventivo è completamente gratuito e senza impegno.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4>Garanzia di Qualità</h4>
                <p>Tutti i nostri servizi sono coperti da garanzia e realizzati da professionisti.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preventivo;