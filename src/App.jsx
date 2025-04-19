import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Moodboard from './components/Moodboard';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import './styles/global.css';
import './styles/Navbar.css';

function App() {
  return (
    <motion.div 
      className="app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Moodboard />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Hency Kachoria. All rights reserved.</p>
        </div>
      </footer>
      <SpeedInsights />
      <Analytics />
    </motion.div>
  );
}

export default App; 