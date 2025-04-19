import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCertificate, FaTools } from 'react-icons/fa';
import '../styles/Resume.css';

const Resume = () => {
  const education = [
    {
      school: "The University of Texas At Arlington",
      location: "Arlington, TX",
      degree: "Bachelor of Science: Biology",
      date: "Expected in 12/2028",
      details: []
    },
    {
      school: "Strong Point And Education",
      location: "Dubai, UAE",
      degree: "CERTIFIED NURSING ASSISTANT",
      date: "05/2023",
      details: []
    },
    {
      school: "S.S DIVNIE ENGLISH MEDIUM SCHOOL",
      location: "AHMEDABAD, INDIA",
      degree: "HIGH SCHOOL EDUCATION",
      date: "05/2021",
      details: []
    },
    {
      school: "M.M MEHTA ENGLISH MEDIUM SCHOOL",
      location: "PALANPUR, INDIA",
      degree: "SECONDARY EDUCATION",
      date: "03/2019",
      details: []
    }
  ];

  const experience = [
    {
      title: "Research Assistant",
      company: "Nirma University",
      location: "Ahmedabad, India",
      date: "06/2022 - 08/2022",
      details: [
        "Participated in lab meetings and project presentations.",
        "Conducted literature reviews to support hypothesis development and identify gaps in existing knowledge.",
        "Collaborated with researchers and scientists to design and execute experiments.",
        "Managed laboratory equipment and resources, ensuring proper maintenance and optimal functionality.",
        "Developed comprehensive reports on research progress, keeping stakeholders informed and engaged."
      ]
    },
    {
      title: "Medical Assistant Intern",
      company: "TANVI HOSPITAL",
      location: "CHAPPI,GUJARAT,INDIA",
      date: "07/2021 - 12/2021",
      details: [
        "Optimized workflow within the clinic setting by effectively triaging incoming phone calls and addressing urgent concerns from patients or healthcare providers.",
        "Assisted healthcare professionals with conducting physical exams for patients.",
        "Obtained and documented patient medical history, vital signs and current complaints at intake.",
        "Boosted overall clinic productivity through assisting medical staff in organizing schedules, managing patient flow, and prioritizing tasks."
      ]
    }
  ];

  const skills = [
    "Human studies",
    "Writing reports",
    "Laboratory experiments",
    "Sample testing",
    "Medical Terminology",
    "Patient Care Technician",
    "Pediatric Emergency Assessment, Recognition and Stabilization (PEARS)",
    "Medical emergency preparedness"
  ];

  const certifications = [
    "CNA - Certified Nurse Assistant by American Medical Certification Association",
    "BLS - basic life supporter by American Medical Certification Association",
    "Certified photography and photoshop learner"
  ];

  return (
    <section id="resume" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional Journey
        </motion.h2>

        <div className="resume-grid">
          <motion.div 
            className="resume-section"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <FaGraduationCap className="section-icon" />
              <h3>Education</h3>
            </div>
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                className="education-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4>{edu.school}</h4>
                <p className="location">{edu.location}</p>
                <p className="degree">{edu.degree}</p>
                <p className="date">{edu.date}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="resume-section"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <FaBriefcase className="section-icon" />
              <h3>Experience</h3>
            </div>
            {experience.map((exp, index) => (
              <motion.div 
                key={index}
                className="experience-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4>{exp.title}</h4>
                <p className="company">{exp.company}</p>
                <p className="location">{exp.location}</p>
                <p className="date">{exp.date}</p>
                <ul>
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="resume-section"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <FaTools className="section-icon" />
              <h3>Skills</h3>
            </div>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="skill-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="resume-section"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <FaCertificate className="section-icon" />
              <h3>Certifications</h3>
            </div>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  className="certification-item"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {cert}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="professional-summary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Professional Summary</h3>
          <p>
            As a pre-medical student, I am committed to pursuing a career in medicine with a focus on delivering compassionate and evidence-based care to patients. With a strong foundation in the sciences, coupled with hands-on experience through internships, volunteer work, and research projects, I am equipped with the skills necessary to excel in medical school and beyond. I am dedicated to lifelong learning, maintaining ethical standards, and contributing positively to the healthcare field.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 