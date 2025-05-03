import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../RecentTechnologyPosts/RecentTechnologyPosts.css';

const RecentTechnologyPosts = ({ posts }) => {
  const recentTechnology = posts
    .filter((item) => item.category === 'Technology')
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 180, friction: 18 },
  });

  return (
    <div className="recent-tech-container">
      <h2 className="recent-tech-title">Recent Technology Posts</h2>

      <div className="recent-tech-grid">
        {recentTechnology.map((item, index) => (
          <animated.div key={index} style={fadeIn} className="recent-tech-card">
            <img src={item.image} alt={item.title} className="recent-tech-img" />
            <div className="flex-1">
              <div className="recent-tech-meta">
                {item.category} &mdash; {item.date}
              </div>
              <h3 className="recent-tech-heading">{item.title}</h3>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default RecentTechnologyPosts;
