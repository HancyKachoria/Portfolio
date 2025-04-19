import React from 'react';
import { motion } from 'framer-motion';
import { FaFlask, FaGlobeAmericas, FaCamera, FaBook, FaStethoscope, FaCar, FaTrophy, FaHeart } from 'react-icons/fa';
import '../styles/Moodboard.css';

const themes = [
  {
    title: "Scientific Pursuit",
    icon: <FaFlask />,
    description: "Research experience at Nirma University",
    color: "var(--color-navy)",
    keywords: ["Research", "Analysis", "Innovation"]
  },
  {
    title: "Global Perspective",
    icon: <FaGlobeAmericas />,
    description: "Journey from India through Dubai to USA",
    color: "var(--color-espresso)",
    keywords: ["Cultural Depth", "Adaptability", "Global Mindset"]
  },
  {
    title: "Medical Aspiration",
    icon: <FaStethoscope />,
    description: "Pre-med focus with surgical dreams",
    color: "var(--color-silver)",
    keywords: ["Healthcare", "Precision", "Dedication"]
  },
  {
    title: "Visual Arts",
    icon: <FaCamera />,
    description: "Professional photography certification",
    color: "var(--color-terracotta)",
    keywords: ["Composition", "Digital Art", "Aesthetics"],
    isCertified: true
  },
  {
    title: "Racing Spirit",
    icon: <FaCar />,
    description: "Formula 1 enthusiasm and precision",
    color: "var(--color-navy)",
    keywords: ["Speed", "Strategy", "Excellence"]
  },
  {
    title: "Celebrate Your Life",
    description: "Joyful moments and cherished memories",
    icon: <FaHeart />,
    color: "var(--color-navy)",
    keywords: ["Joyful Spirit", "Life Enthusiast", "Memory Maker"]
  }
];

const Moodboard = () => {
  return (
    <section id="moodboard" className="moodboard-section">
      <div className="moodboard-content">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Essence & Aspirations
        </motion.h2>

        <motion.div 
          className="moodboard-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              className={`theme-card ${theme.isCertified ? 'certified' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="theme-icon" style={{ color: theme.color }}>
                {theme.icon}
              </div>
              <h3>{theme.title}</h3>
              <p>{theme.description}</p>
              <div className="keywords">
                {theme.keywords.map((keyword, i) => (
                  <span key={i} className="keyword">{keyword}</span>
                ))}
              </div>
              {theme.isCertified && <span className="certification-badge">Certified</span>}
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="inspiration-quote"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p>
            "Blending scientific precision with artistic vision, each experience shapes a unique journey in medicine and life."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Moodboard; 