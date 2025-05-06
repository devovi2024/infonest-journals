import React, { useState } from 'react';

const Opinion = ({ posts = [] }) => {
  const opinionPosts = posts.filter(post => post.category === 'Opinion');

  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  const activePost = opinionPosts[activeIndex];

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={activePost?.image || 'https://via.placeholder.com/600x400'}
          alt="Main news"
          className="w-full h-72 object-cover"
        />
        <button className="absolute top-4 right-4 bg-burnt-orange text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-center text-xs text-gray-600 mb-3">
          <span className="uppercase font-medium text-burnt-orange">Opinion /</span>
          <span className="ml-2">{activePost?.category}</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
          {activePost?.title1 || 'No Title Available'}
        </h2>
        <p className="text-sm text-gray-700 md:text-base">
          {activePost?.description || 'No description available.'}
        </p>
      </div>

      <div className="flex overflow-x-auto space-x-3 p-4 md:px-6 scrollbar-hide smooth-scroll">
        {opinionPosts.map((post, index) => (
          <img
            key={index}
            src={post.image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-24 h-16 object-cover rounded-lg shadow-md transition-shadow duration-200 
              ${activeIndex === index ? 'ring-4 ring-burnt-orange' : 'hover:shadow-lg'}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Opinion;
