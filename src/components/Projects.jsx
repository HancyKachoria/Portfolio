import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaMicroscope, FaDna, FaChartLine } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      title: "Genetic Variation Study",
      description: "A comprehensive research project analyzing genetic variations in plant species and their impact on growth patterns and environmental adaptation.",
      tags: ["Genetics", "Research", "Data Analysis", "Plant Biology"],
      icon: <FaDna />,
      details: [
        "Conducted DNA extraction and sequencing",
        "Analyzed genetic markers and variations",
        "Presented findings at university symposium"
      ]
    },
    {
      title: "Molecular Biology Lab Research",
      description: "Development and optimization of laboratory techniques for DNA analysis, including PCR protocols and gel electrophoresis methods.",
      tags: ["Molecular Biology", "Lab Techniques", "DNA Analysis", "PCR"],
      icon: <FaMicroscope />,
      details: [
        "Optimized PCR conditions for specific gene amplification",
        "Developed new gel electrophoresis protocols",
        "Created detailed lab documentation"
      ]
    },
    {
      title: "Biological Data Analysis",
      description: "Statistical analysis of biological data sets to identify patterns and correlations in genetic expression and environmental factors.",
      tags: ["Data Analysis", "Statistics", "Bioinformatics", "Research"],
      icon: <FaChartLine />,
      details: [
        "Processed and analyzed large biological datasets",
        "Developed statistical models for data interpretation",
        "Created visualizations for research presentations"
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div 
          className="projects-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Research Projects
          </motion.h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-details">
                    <ul>
                      {project.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects; 