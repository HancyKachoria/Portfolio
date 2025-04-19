import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaEye, FaHeart } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [views, setViews] = useState(1);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Reset views to 1
    localStorage.setItem('portfolioViews', '1');
    sessionStorage.setItem('hasVisited', 'true');
    setViews(1);

    // Load saved likes data
    const savedLikes = localStorage.getItem('portfolioLikes');
    if (savedLikes) {
      setLikes(parseInt(savedLikes));
    }
    if (localStorage.getItem('hasLiked')) {
      setHasLiked(true);
    }

    // Scroll event listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setHasLiked(true);
      localStorage.setItem('portfolioLikes', newLikes);
      localStorage.setItem('hasLiked', 'true');
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-main">
          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
              About
            </Link>
            <Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>
              Skills
            </Link>
            <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>
              Projects
            </Link>
            <Link to="moodboard" smooth={true} duration={500} onClick={toggleMenu}>
              Moodboard
            </Link>
            <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
              Contact
            </Link>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="nav-stats">
          <div className="stat-item">
            <FaEye className="stat-icon" />
            <div className="stat-info">
              <span className="stat-value">{views}</span>
              <span className="stat-label">Views</span>
            </div>
          </div>
          <div className="stat-item">
            <button 
              className={`like-button ${hasLiked ? 'liked' : ''}`}
              onClick={handleLike}
              aria-label="Like this portfolio"
            >
              <FaHeart className="stat-icon" />
              <div className="stat-info">
                <span className="stat-value">{likes}</span>
                <span className="stat-label">Likes</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 