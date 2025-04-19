import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Intro() {
  return (
    <section id="home" className="intro-section">
      <div className="container">
        <motion.div 
          className="intro-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="intro-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hency Kachoria
          </motion.h1>
          
          <motion.p 
            className="intro-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Biology Student & Aspiring Researcher
          </motion.p>
          
          <motion.p 
            className="intro-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Passionate about exploring the wonders of life sciences and making meaningful contributions to scientific research. 
            Currently pursuing my degree in Biology with a focus on molecular biology and genetics.
          </motion.p>
          
          <motion.div 
            className="social-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a href="https://linkedin.com/in/hencykachoria" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/hencykachoria" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:hencykachoria@gmail.com">
              <FaEnvelope />
            </a>
          </motion.div>
          
          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a href="#projects" className="btn primary">View My Work</a>
            <a href="#contact" className="btn secondary">Get in Touch</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Intro; 