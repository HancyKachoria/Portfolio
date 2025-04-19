import React from 'react';

function Home() {
  return (
    <section id="home" className="home-section cover-page">
      <div className="cover-photo">
        {/* Replace with your professional photo */}
        <img src="/images/hency-placeholder.jpg" alt="Hency Kachoria" className="profile-img" />
      </div>
      <div className="cover-content">
        <h1>Portfolio of Hency Kachoria</h1>
        <h2 className="subtitle">A Journey in Biology and Beyond</h2>
        <div className="bio-icons">
          {/* Biology-inspired icons (DNA, microscope, leaf) */}
          <span role="img" aria-label="DNA">🧬</span>
          <span role="img" aria-label="Microscope">🔬</span>
          <span role="img" aria-label="Leaf">🌱</span>
        </div>
      </div>
    </section>
  );
}

export default Home; 