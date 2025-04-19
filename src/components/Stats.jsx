import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaHeart } from 'react-icons/fa';

const Stats = () => {
  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  // Initialize stats from localStorage
  useEffect(() => {
    // Load saved data
    const savedViews = localStorage.getItem('portfolioViews');
    const savedLikes = localStorage.getItem('portfolioLikes');
    const savedHasLiked = localStorage.getItem('hasLiked');

    // Set initial values
    setViews(savedViews ? parseInt(savedViews) : 0);
    setLikes(savedLikes ? parseInt(savedLikes) : 0);
    setHasLiked(savedHasLiked === 'true');

    // Increment views
    const newViews = (savedViews ? parseInt(savedViews) : 0) + 1;
    setViews(newViews);
    localStorage.setItem('portfolioViews', newViews.toString());
  }, []);

  const handleLike = () => {
    if (hasLiked) return;
    
    const newLikes = likes + 1;
    setLikes(newLikes);
    setHasLiked(true);
    
    localStorage.setItem('portfolioLikes', newLikes.toString());
    localStorage.setItem('hasLiked', 'true');
  };

  return (
    <motion.div 
      className="stats-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="stat-item">
        <FaEye className="stat-icon" />
        <span className="stat-value">{views}</span>
        <span className="stat-label">Views</span>
      </div>
      <div className="stat-item">
        <motion.button
          className={`like-button ${hasLiked ? 'liked' : ''}`}
          onClick={handleLike}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={hasLiked}
        >
          <FaHeart className="stat-icon" />
          <span className="stat-value">{likes}</span>
          <span className="stat-label">Likes</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Stats; 