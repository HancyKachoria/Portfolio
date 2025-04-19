import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    // Reset success state after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="section-title">Get in Touch</h2>
            <p className="contact-description">
              I'm always open to new opportunities, collaborations, and interesting conversations.
              Feel free to reach out!
            </p>
            <div className="contact-details">
              <motion.div 
                className="contact-item"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>hancykachoria@gmail.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="contact-item"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>+1 (437) 989-9999</p>
                </div>
              </motion.div>

              <motion.div 
                className="contact-item"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3>Location</h3>
                  <p>Toronto, Ontario</p>
                </div>
              </motion.div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              />
            </div>
            
            <button
              type="submit"
              className="button"
              disabled={isSubmitting}
            >
              <div className="state state--default">
                <div className="icon">
                  <FaPaperPlane />
                </div>
                <p>
                  {'Send Message'.split('').map((letter, i) => (
                    <span key={i} style={{ '--i': i }}>
                      {letter}
                    </span>
                  ))}
                </p>
              </div>
              <div className="state state--sent">
                <div className="icon">
                  <FaCheck />
                </div>
                <p>
                  {'Sent!'.split('').map((letter, i) => (
                    <span key={i} style={{ '--i': i }}>
                      {letter}
                    </span>
                  ))}
                </p>
              </div>
              <div className="outline"></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 