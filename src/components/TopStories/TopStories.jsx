import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TopStories = ({ posts = [] }) => {
  const [fadeIn, setFadeIn] = useState(false);

  const topStories = posts.filter(
    post => post.level === 'headline'
  );

  useEffect(() => {
    const timeout = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* Google Font for vintage look */}
      <link
        href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap"
        rel="stylesheet"
      />

      {/* Extra Style for Vintage Paper Look */}
      <style>
        {`
          .paper-style {
            font-family: 'Special Elite', 'Georgia', serif;
            background: linear-gradient(to right, #fdf6e3, #f8f1db);
            color: #333;
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
            border: 1px solid #e0d9c3;
          }

          .paper-style h3 {
            font-weight: 600;
            color: #2f2f2f;
          }

          .paper-style p {
            font-style: italic;
            color: #7b3f00;
          }

          .paper-style a {
            color: #8b4513;
            text-decoration: underline dotted;
          }

          .paper-style a:hover {
            color: #a0522d;
          }

          /* Hide scrollbar (WebKit only) */
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }

          .no-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;     /* Firefox */
          }
        `}
      </style>

      <div
        className={`paper-style border-t border-b py-4 px-4 transition-opacity duration-1000 ease-in-out ${
          fadeIn ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h2 className="text-xl font-bold mb-4">Top Stories</h2>

        <div
          className="flex space-x-6 snap-x snap-mandatory no-scrollbar"
          style={{
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            scrollBehavior: 'smooth',
          }}
        >
          {topStories.length > 0 ? (
            topStories.map((item, index) => (
              <div
                key={index}
                className="snap-start flex-shrink-0 w-72 sm:w-80 md:w-96 flex bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.title1}
                  className="w-32 h-32 object-cover rounded-lg transform transition-transform duration-300 hover:scale-110"
                  onError={(e) => (e.target.src = '/path/to/fallback-image.jpg')}
                />
                <div className="pl-4 pr-2 py-4 flex flex-col justify-between">
                  <Link to={`/post/${item.slug}`} className="hover:underline">
                    <h3 className="text-lg leading-snug mb-2">{item.title1}</h3>
                  </Link>
                  <p className="text-xs tracking-wide">{item.level}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No top stories available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default TopStories;
