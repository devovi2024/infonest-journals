import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 
import { useSpring, animated } from 'react-spring';
const EntertainmentPosts = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  // Animation for the post card hover effect
  const hoverSpring = useSpring({
    transform: 'scale(1)',
    from: { transform: 'scale(0.98)' },
    config: { tension: 300, friction: 20 },
  });

  // Pagination button hover effect
  const paginationSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="px-6 font-serif bg-gradient-to-r from-gray-50 to-white">
      <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-8">
        Entertainment News
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentPosts.map((post, index) => (
          <animated.div
            key={index}
            style={hoverSpring}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 p-5"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-lg shadow-md filter grayscale-10 transition-all duration-500 ease-in-out hover:grayscale-0"
            />
            <div className="mt-4">
              <div className="text-xs text-gray-600 uppercase tracking-wide mb-2">
                <span className="text-blue-600 font-semibold mr-2">{post.category}</span>
                <span className="text-gray-400">| {post.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 cursor-pointer transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed text-justify">
                {post.content}
              </p>
            </div>
          </animated.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-3">
        {/* Previous Page Button */}
        {currentPage > 1 && (
          <animated.button
            style={paginationSpring}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-4 py-2 rounded-md border text-sm text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <FaChevronLeft />
          </animated.button>
        )}

        {/* Page Number Buttons */}
        {[...Array(totalPages)].map((_, index) => (
          <animated.button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            style={paginationSpring}
            className={`px-4 py-2 rounded-md border text-sm ${
              currentPage === index + 1
                ? 'bg-blue-600 text-white font-bold'
                : 'bg-white text-blue-600 border-blue-600'
            } hover:bg-blue-600 hover:text-white transition duration-300`}
          >
            {index + 1}
          </animated.button>
        ))}

        {/* Next Page Button */}
        {currentPage < totalPages && (
          <animated.button
            style={paginationSpring}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 py-2 rounded-md border text-sm text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <FaChevronRight />
          </animated.button>
        )}
      </div>
    </div>
  );
};

export default EntertainmentPosts;
