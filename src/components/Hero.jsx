import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Hancy Kachoria</h1>
      <p>
        Pre-med student blending <span className="highlight">scientific precision</span> with <span className="highlight">artistic vision</span>.
      </p>
      <img 
        src="/path-to-your-photo.jpg" 
        alt="Hancy Kachoria" 
        className="profile-photo"
      />
    </section>
  );
};

export default Hero; 