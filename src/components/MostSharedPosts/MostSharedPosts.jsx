import React, { useState } from 'react';
import { FaHeart, FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MostSharedPosts = ({ posts }) => {
  const [currentItems, setCurrentItems] = useState(posts.slice(0, 5));
  const [startIndex, setStartIndex] = useState(0);

  const changePage = (direction) => {
    const newIndex = startIndex + direction * 5;
    if (newIndex >= 0 && newIndex < posts.length) {
      setStartIndex(newIndex);
      setCurrentItems(posts.slice(newIndex, newIndex + 5));
    }
  };

  return (
    <div className="container mx-auto px-4 font-serif bg-gray-50 py-4 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">
          Most Shared
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => changePage(-1)}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            disabled={startIndex === 0}
          >
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button
            onClick={() => changePage(1)}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            disabled={startIndex + 5 >= posts.length}
          >
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* List Items */}
      {currentItems.map((item) => (
        <div
          key={item.id}
          className="flex items-start mb-4 py-3 px-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
        >
          {/* Number Circle */}
          <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-semibold mr-4">
            {item.id}
          </div>
          {/* Content */}
          <div className="flex-1">
            <div className="text-xs text-blue-600 font-semibold">
              {item.category} <span className="text-gray-400">/ {item.date}</span>
            </div>

            <Link to={`/post/${item.slug}`} className="text-blue-500 hover:underline">
                  <h3 className="text-xl font-serif text-gray-800 mt-1 mb-3 leading-snug">
                    {item.title1}
                  </h3>
                </Link>
            <div className="flex items-center space-x-3 mt-1">
              <div className="flex items-center space-x-1 text-gray-600">
                <FaHeart className="w-4 h-4 text-blue-600" />
                <span className="text-sm">{item.likes}</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                <FaShare className="w-4 h-4 text-blue-600" />
                <span className="text-sm">{item.shares}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostSharedPosts;
