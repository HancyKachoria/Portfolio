import React from 'react';
import { motion } from 'framer-motion';
import { FaFlask, FaHospital, FaGraduationCap, FaCertificate } from 'react-icons/fa';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Clinical Certifications",
      icon: <FaCertificate />,
      skills: [
        "CNA - Certified Nurse Assistant (AMCA)",
        "BLS - Basic Life Support (AMCA)",
        "Patient Care Technician",
        "Medical Emergency Response"
      ]
    },
    {
      title: "Medical & Research",
      icon: <FaFlask />,
      skills: [
        "Laboratory Experiments",
        "Medical Terminology",
        "Sample Testing",
        "Research Documentation"
      ]
    },
    {
      title: "Clinical Experience",
      icon: <FaHospital />,
      skills: [
        "Patient Assessment",
        "Medical Documentation",
        "Clinical Workflow",
        "Emergency Response"
      ]
    },
    {
      title: "Academic",
      icon: <FaGraduationCap />,
      skills: [
        "Research Writing",
        "Data Analysis",
        "Project Management",
        "Scientific Method"
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional Skills & Certifications
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: (index * 4 + i) * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 