import React from 'react';
import './FloatingContact.css';

const FloatingContact = () => {
  return (
    <div className="floating-contact">
      <div className="contact-bubble whatsapp">
        <a href="https://wa.me/393923842491" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
      <div className="contact-bubble phone">
        <a href="tel:+393923842491" aria-label="Chiama">
          <i className="fas fa-phone-alt"></i>
        </a>
      </div>
      <div className="contact-bubble email">
        <a href="mailto:info@ferramentaabc.it" aria-label="Email">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default FloatingContact;
