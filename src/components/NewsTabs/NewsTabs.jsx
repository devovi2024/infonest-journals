import React, { useState, useEffect } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import RecentPosts from '../RecentPosts/RecentPosts'; 
import RelatedPosts from '../RelatedPosts/RelatedPosts'; 
import PopularPosts from '../PopularPosts/PopularPosts'; 

const NewsTabs = ({ posts }) => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('RECENT');

  // Tab click handler
  const handleTabClick = (tab) => setActiveTab(tab);

  // Logic for current category
  const currentCategory = posts[0]?.category || 'Technology';

  // Limit number of posts displayed
  const limitedPosts = posts.slice(0, 5);

  useEffect(() => {
    // Inject fade-in keyframes into the head of the document
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
    `;
    document.head.appendChild(styleTag);

    return () => {
      // Cleanup style on unmount
      document.head.removeChild(styleTag);
    };
  }, []);

  // Inline style for the animation
  const fadeInStyle = {
    animation: 'fadeIn 1.0s ease-in-out',
  };

  return (
    <div className="p-4 font-ubuntu">
      <div className="flex justify-between mb-4">
        <button
          className={`px-4 py-2 rounded-t-lg font-bold tracking-wide transition duration-400 transform ${
            activeTab === 'RECENT' 
              ? 'bg-[#a34d2d] text-white scale-105' 
              : 'text-[#5b341b] hover:text-[#a34d2d]'
          }`}
          onClick={() => handleTabClick('RECENT')}
        >
          RECENT
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg font-bold tracking-wide transition duration-700 transform ${
            activeTab === 'RELATED' 
              ? 'bg-[#a34d2d] text-white scale-105' 
              : 'text-[#5b341b] hover:text-[#a34d2d]'
          }`}
          onClick={() => handleTabClick('RELATED')}
        >
          RELATED
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg font-bold tracking-wide transition duration 500 transform ${
            activeTab === 'POPULAR' 
              ? 'bg-[#a34d2d] text-white scale-105' 
              : 'text-[#5b341b] hover:text-[#a34d2d]'
          }`}
          onClick={() => handleTabClick('POPULAR')}
        >
          POPULAR
        </button>
      </div>

      {/* Conditional rendering with inline fade-in animation */}
      {activeTab === 'RECENT' && (
        <div style={fadeInStyle}>
          <RecentPosts posts={limitedPosts} />
        </div>
      )}
      {activeTab === 'RELATED' && (
        <div style={fadeInStyle}>
          <RelatedPosts posts={limitedPosts} currentCategory={currentCategory} />
        </div>
      )}
      {activeTab === 'POPULAR' && (
        <div style={fadeInStyle}>
          <PopularPosts posts={limitedPosts} />
        </div>
      )}
    </div>
  );
};

export default NewsTabs;
