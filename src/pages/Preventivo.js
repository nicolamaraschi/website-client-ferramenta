import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Preventivo.css';

const Preventivo = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/preventivoValidation.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        form.classList.add('was-validated');

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            form.submit();
        }
    };

    return (
        <section id="preventivo" className="container mt-5 mb-5" style={{ backgroundColor: '#f8f9fa', padding: '3rem 0' }}>
            <h2 className="text-center mb-4">Richiedi un Preventivo 📋</h2>
            <form
                id="preventivo-form"
                action="https://formspree.io/f/myzgjdkj" 
                method="POST"
                className="needs-validation"
                noValidate
                onSubmit={handleSubmit}
            >
                <div className="row">
                    {/* Nome e Cognome */}
                    <div className="col-md-6 mb-3">
                        <label htmlFor="nome" className="form-label">Nome *</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            name="nome"
                            required
                        />
                        <div className="invalid-feedback">Inserisci il tuo nome.</div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="cognome" className="form-label">Cognome *</label>
                        <input
                            type="text"
                            className="form-control"
                            id="cognome"
                            name="cognome"
                            required
                        />
                        <div className="invalid-feedback">Inserisci il tuo cognome.</div>
                    </div>

                    {/* Email e Telefono */}
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">Email 📧 *</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            required
                        />
                        <div className="invalid-feedback">Inserisci un'email valida.</div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="telefono" className="form-label">Telefono 📞</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="telefono"
                            name="telefono"
                            pattern="^[+]?[0-9\s]*$"
                            placeholder="es: +39 123 456 789"
                        />
                        <div className="invalid-feedback">Inserisci un numero di telefono valido (solo numeri e spazi, opzionale).</div>
                    </div>

                    {/* Tipologia di Lavoro */}
                    <div className="col-md-12 mb-3">
                        <label htmlFor="tipologia" className="form-label">Tipologia di Lavoro 🛠️ *</label>
                        <select
                            id="tipologia"
                            name="tipologia"
                            className="form-select"
                            required
                        >
                            <option value="" disabled selected>Seleziona...</option>
                            <option value="riparazione-porte">Riparazione Porte</option>
                            <option value="installazione-serrature">Installazione Serrature</option>
                            <option value="sostituzione-cilindri">Sostituzione Cilindri</option>
                            <option value="apertura-porte">Apertura Porte</option>
                            <option value="riparazione-tapparelle">Riparazione Tapparelle</option>
                            <option value="manutenzione">Manutenzione Preventiva</option>
                        </select>
                        <div className="invalid-feedback">Seleziona la tipologia di lavoro.</div>
                    </div>

                    {/* Descrizione del Lavoro */}
                    <div className="col-md-12 mb-3">
                        <label htmlFor="descrizione" className="form-label">Descrizione del Lavoro 📜 *</label>
                        <textarea
                            id="descrizione"
                            name="descrizione"
                            className="form-control"
                            rows="4"
                            required
                        ></textarea>
                        <div className="invalid-feedback">Fornisci una descrizione dettagliata del lavoro.</div>
                    </div>

                    {/* Data e Ora */}
                    <div className="col-md-6 mb-3">
                        <label htmlFor="data" className="form-label">Data Preferita 📅 *</label>
                        <input
                            type="date"
                            className="form-control"
                            id="data"
                            name="data"
                            required
                        />
                        <div className="invalid-feedback">Seleziona una data.</div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="ora" className="form-label">Ora Preferita ⏰ *</label>
                        <input
                            type="time"
                            className="form-control"
                            id="ora"
                            name="ora"
                            required
                        />
                        <div className="invalid-feedback">Seleziona un'ora.</div>
                    </div>

                    {/* Accettazione Privacy */}
                    <div className="col-md-12 mb-3">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="privacy"
                                name="privacy"
                                required
                            />
                            <label className="form-check-label" htmlFor="privacy">
                                Accetto la <a href="https://tuo-sito.com/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</a> *
                            </label>
                            <div className="invalid-feedback">Devi accettare la privacy policy per inviare il modulo.</div>
                        </div>
                    </div>

                    {/* Pulsante di Invio */}
                    <div className="col-md-12">
                        <button className="btn btn-primary" type="submit">Invia</button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Preventivo;