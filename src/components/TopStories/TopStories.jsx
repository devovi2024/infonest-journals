import React from 'react';
import { Link } from 'react-router-dom';
import './TopStories.css';

const TopStories = ({ posts = [] }) => {
  const topStories = posts.filter(post => post.level === 'headline' || post.level === 'breaking news');

  return (
    <div className="bg-white border-t border-b border-gray-300 py-4 px-4 font-serif">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Top Stories</h2>
      <div className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-snap-x snap-mandatory">
        {topStories.length > 0 ? (
          topStories.map((item, index) => (
            <div
              key={index}
              className="snap-start flex-shrink-0 w-72 sm:w-80 md:w-96 flex bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-cover rounded-lg transform transition-transform duration-300 hover:scale-110"
                onError={(e) => e.target.src = '/path/to/fallback-image.jpg'}
              />
              <div className="pl-4 pr-2 py-4 flex flex-col justify-between">
                <Link to={`/post/${item.slug}`} className="text-blue-500 hover:underline">
                  <h3 className="text-lg font-semibold text-gray-800 leading-snug mb-2">
                    {item.title}
                  </h3>
                </Link>
                <p className="text-xs text-red-700 italic tracking-wide">
                  {item.level}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No top stories available.</p>
        )}
      </div>
    </div>
  );
};

export default TopStories;
