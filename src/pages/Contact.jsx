import React from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:hency.kachoria@email.com">hency.kachoria@email.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/hencykachoria" target="_blank" rel="noopener noreferrer">linkedin.com/in/hencykachoria</a></p>
      <p>Photography Portfolio: <a href="#" target="_blank" rel="noopener noreferrer">(Add your link here)</a></p>
      <ContactForm />
    </section>
  );
}

export default Contact; 