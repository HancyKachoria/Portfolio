import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} My Folio. All rights reserved.</p>
      <div className="social-links">
        {/* Add your social icons/links here */}
        <a href="#" aria-label="LinkedIn">LinkedIn</a>
        <a href="#" aria-label="GitHub">GitHub</a>
        <a href="#" aria-label="Twitter">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer; 