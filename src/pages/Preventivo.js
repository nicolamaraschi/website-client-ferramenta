import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react'; // Importa da @formspree/react
import './Preventivo.css';

const Preventivo = () => {
  // Stato Formspree
  const [state, handleSubmitFormspree] = useForm("mblggzbn"); // Usa il tuo ID Formspree qui

  // Stato iniziale del form per i valori dei campi
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
  
  // Stato per gestire gli errori di validazione custom (se vuoi mantenerli oltre a quelli di Formspree)
  const [errors, setErrors] = useState({});
  const [submitSuccessMessage, setSubmitSuccessMessage] = useState(false);

  // Gestisce il cambio dei valori del form
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Resetta l'errore per il campo corrente quando viene modificato
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: null
      }));
    }
  };
  
  // Validazione del form (puoi mantenere la tua logica di validazione client-side)
  const validateForm = () => {
    const newErrors = {};
    if (!formData.nome.trim()) newErrors.nome = 'Il nome è obbligatorio';
    if (!formData.cognome.trim()) newErrors.cognome = 'Il cognome è obbligatorio';
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Indirizzo email non valido';
    }
    if (formData.telefono.trim() && !/^[+]?[0-9\s]*$/.test(formData.telefono)) {
      newErrors.telefono = 'Numero di telefono non valido';
    }
    if (!formData.tipologia) newErrors.tipologia = 'La tipologia di lavoro è obbligatoria';
    if (!formData.descrizione.trim()) {
      newErrors.descrizione = 'La descrizione è obbligatoria';
    } else if (formData.descrizione.trim().length < 10) {
      newErrors.descrizione = 'La descrizione deve contenere almeno 10 caratteri';
    }
    if (!formData.data) {
      newErrors.data = 'La data è obbligatoria';
    } else {
      const selectedDate = new Date(formData.data);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) newErrors.data = 'Non puoi selezionare una data passata';
    }
    if (!formData.ora) newErrors.ora = 'L\'ora è obbligatoria';
    if (!formData.privacy) newErrors.privacy = 'Devi accettare la privacy policy';
    
    return newErrors;
  };
  
  // Gestisce l'invio del form
  const handleFinalSubmit = async (e) => {
    e.preventDefault(); // Preveniamo sempre l'invio nativo
    
    const formValidationErrors = validateForm();
    if (Object.keys(formValidationErrors).length > 0) {
      setErrors(formValidationErrors);
      return;
    }
    
    // Pulisce gli errori precedenti prima di un nuovo tentativo
    setErrors({});

    // Invia i dati del form a Formspree
    // L'hook useForm si aspetta un oggetto FormData o un oggetto semplice.
    // Passiamo formData direttamente. Assicurati che i nomi dei campi in formData
    // corrispondano a quelli che Formspree si aspetta (gli attributi 'name' degli input).
    await handleSubmitFormspree(formData); 
  };

  // Effetto per resettare il form e mostrare messaggio di successo
  useEffect(() => {
    if (state.succeeded) {
      setSubmitSuccessMessage(true);
      setFormData({
        nome: '', cognome: '', email: '', telefono: '',
        tipologia: '', descrizione: '', data: '', ora: '',
        privacy: false, urgente: false
      });
      // Nascondi il messaggio di successo dopo 5 secondi
      const timer = setTimeout(() => {
        setSubmitSuccessMessage(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  // Opzioni per il select della tipologia di lavoro
  const tipiDiLavoro = [
    { value: '', label: 'Seleziona...' },
    { value: 'riparazione-porte', label: 'Riparazione Porte' },
    { value: 'installazione-serrature', label: 'Installazione Serrature' },
    // ... (altre opzioni)
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
          {submitSuccessMessage && (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <strong>Preventivo richiesto con successo!</strong> Ti contatteremo al più presto.
              <button type="button" className="btn-close" onClick={() => setSubmitSuccessMessage(false)}></button>
            </div>
          )}
          
          {/* Mostra errori generali di Formspree, se ce ne sono */}
          {state.errors && state.errors.getFormErrors().length > 0 && (
            <div className="alert alert-danger" role="alert">
              Si è verificato un errore durante l'invio:
              <ul>
                {state.errors.getFormErrors().map((error, index) => (
                  <li key={index}>{error.message}</li>
                ))}
              </ul>
            </div>
          )}

          <form onSubmit={handleFinalSubmit}> {/* Non più action e method qui */}
            {/* Campo honeypot per prevenire spam (Formspree lo gestisce spesso automaticamente, ma puoi aggiungerlo se necessario) */}
            {/* <input type="text" name="_gotcha" style={{ display: 'none' }} /> */}
            
            <div className="row">
              <div className="col-md-6">
                <div className="form-card">
                  <h3>Informazioni Personali</h3>
                  
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className={`form-control ${(errors.nome || state.errors?.getFirstError('nome')) ? 'is-invalid' : ''}`}
                      id="nome"
                      name="nome" // L'attributo name è FONDAMENTALE
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Nome"
                      disabled={state.submitting}
                      // required // La validazione 'required' HTML può essere rimossa se gestita da JS
                    />
                    <label htmlFor="nome">Nome *</label>
                    {errors.nome && <div className="invalid-feedback">{errors.nome}</div>}
                    <ValidationError prefix="Nome" field="nome" errors={state.errors} className="invalid-feedback" />
                  </div>
                  
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className={`form-control ${(errors.cognome || state.errors?.getFirstError('cognome')) ? 'is-invalid' : ''}`}
                      id="cognome"
                      name="cognome"
                      value={formData.cognome}
                      onChange={handleChange}
                      placeholder="Cognome"
                      disabled={state.submitting}
                    />
                    <label htmlFor="cognome">Cognome *</label>
                    {errors.cognome && <div className="invalid-feedback">{errors.cognome}</div>}
                    <ValidationError prefix="Cognome" field="cognome" errors={state.errors} className="invalid-feedback" />
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className={`form-control ${(errors.email || state.errors?.getFirstError('email')) ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      disabled={state.submitting}
                    />
                    <label htmlFor="email">Email *</label>
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="invalid-feedback" />
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="tel"
                      className={`form-control ${(errors.telefono || state.errors?.getFirstError('telefono')) ? 'is-invalid' : ''}`}
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="Telefono"
                      disabled={state.submitting}
                    />
                    <label htmlFor="telefono">Telefono</label>
                    {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
                    <ValidationError prefix="Telefono" field="telefono" errors={state.errors} className="invalid-feedback" />
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="form-card">
                  <h3>Dettagli Richiesta</h3>
                  
                  <div className="form-floating mb-3">
                    <select
                      className={`form-select ${(errors.tipologia || state.errors?.getFirstError('tipologia')) ? 'is-invalid' : ''}`}
                      id="tipologia"
                      name="tipologia"
                      value={formData.tipologia}
                      onChange={handleChange}
                      aria-label="Tipologia di lavoro"
                      disabled={state.submitting}
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
                    <ValidationError prefix="Tipologia" field="tipologia" errors={state.errors} className="invalid-feedback" />
                  </div>
                  
                  <div className="form-floating mb-3">
                    <textarea
                      className={`form-control ${(errors.descrizione || state.errors?.getFirstError('descrizione')) ? 'is-invalid' : ''}`}
                      id="descrizione"
                      name="descrizione"
                      value={formData.descrizione}
                      onChange={handleChange}
                      placeholder="Descrizione"
                      style={{height: "120px"}}
                      disabled={state.submitting}
                    ></textarea>
                    <label htmlFor="descrizione">Descrizione *</label>
                    {errors.descrizione && <div className="invalid-feedback">{errors.descrizione}</div>}
                    <ValidationError prefix="Descrizione" field="descrizione" errors={state.errors} className="invalid-feedback" />
                  </div>
                  
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="date"
                          className={`form-control ${(errors.data || state.errors?.getFirstError('data')) ? 'is-invalid' : ''}`}
                          id="data"
                          name="data"
                          value={formData.data}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          disabled={state.submitting}
                        />
                        <label htmlFor="data">Data Preferita *</label>
                        {errors.data && <div className="invalid-feedback">{errors.data}</div>}
                        <ValidationError prefix="Data" field="data" errors={state.errors} className="invalid-feedback" />
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="time"
                          className={`form-control ${(errors.ora || state.errors?.getFirstError('ora')) ? 'is-invalid' : ''}`}
                          id="ora"
                          name="ora"
                          value={formData.ora}
                          onChange={handleChange}
                          disabled={state.submitting}
                        />
                        <label htmlFor="ora">Ora Preferita *</label>
                        {errors.ora && <div className="invalid-feedback">{errors.ora}</div>}
                        <ValidationError prefix="Ora" field="ora" errors={state.errors} className="invalid-feedback" />
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
                      disabled={state.submitting}
                    />
                    <label className="form-check-label" htmlFor="urgente">Richiesta urgente (entro 24h)</label>
                    <ValidationError prefix="Urgente" field="urgente" errors={state.errors} className="form-check-label" /> 
                  </div>
                </div>
              </div>
            </div>
            
            <div className="form-card mt-4">
              <div className="form-check mb-3">
                <input
                  className={`form-check-input ${(errors.privacy || state.errors?.getFirstError('privacy')) ? 'is-invalid' : ''}`}
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  disabled={state.submitting}
                />
                <label className="form-check-label" htmlFor="privacy">
                  Accetto la <a href="/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a> *
                </label>
                {errors.privacy && <div className="invalid-feedback">{errors.privacy}</div>}
                <ValidationError prefix="Privacy" field="privacy" errors={state.errors} className="invalid-feedback" />
              </div>
              
              <button 
                type="submit" 
                className="btn-submit"
                disabled={state.submitting}
              >
                {state.submitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Invio in corso...
                  </>
                ) : 'Richiedi Preventivo'}
              </button>
            </div>
          </form>
        </div>
        
        {/* ... (resto del componente info cards etc.) ... */}
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
