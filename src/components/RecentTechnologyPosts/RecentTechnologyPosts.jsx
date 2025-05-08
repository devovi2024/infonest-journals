import React from 'react';
import { motion } from 'framer-motion'; 
import '../RecentTechnologyPosts/RecentTechnologyPosts.css';

const RecentTechnologyPosts = ({ posts }) => {
  const recentTechnology = posts
    .filter((item) => item.category === 'Technology')
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  return (
    <div className="recent-tech-container">
      <h2 className="recent-tech-title">Recent Technology Posts</h2>

      <div className="recent-tech-grid">
        {recentTechnology.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }} // delay for staggered animation
            className="recent-tech-card"
          >
            <img src={item.image} alt={item.title} className="recent-tech-img" />
            <div className="flex-1">
              <div className="recent-tech-meta">
                {item.category} &mdash; {item.date}
              </div>
              <h3 className="recent-tech-heading">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentTechnologyPosts;
