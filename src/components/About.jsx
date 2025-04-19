import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaFlask, FaGlobeAsia } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
  const highlights = [
    {
      icon: <FaGraduationCap />,
      title: "Academic Focus",
      description: "Pre-medical student at UT Arlington, pursuing a Bachelor's in Biology with dedication to medical sciences."
    },
    {
      icon: <FaFlask />,
      title: "Research Experience",
      description: "Engaged in laboratory research at Nirma University, developing strong analytical and experimental skills."
    },
    {
      icon: <FaGlobeAsia />,
      title: "International Background",
      description: "Educational journey spanning India, Dubai, and the USA, bringing a unique global perspective to healthcare."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.h2 
          className="about-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="about-description">
            As a pre-medical student at UT Arlington, I am committed to pursuing excellence in medical sciences with a focus on delivering compassionate and evidence-based care. My international background and research experience have shaped my understanding of global healthcare challenges and the importance of innovative solutions.
          </p>
          
          <div className="highlights-container">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="highlight-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="highlight-icon">
                  {highlight.icon}
                </div>
                <h3 className="highlight-title">{highlight.title}</h3>
                <p className="highlight-description">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 