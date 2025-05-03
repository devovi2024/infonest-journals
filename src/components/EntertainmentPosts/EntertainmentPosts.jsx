import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import '../EntertainmentPosts/Entertain.css'
const EntertainmentPosts = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  const hoverSpring = useSpring({
    transform: 'scale(1)',
    from: { transform: 'scale(0.98)' },
    config: { tension: 300, friction: 20 },
  });

  const paginationSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="px-4 py-6 font-serif bg-paper-light shadow-paper rounded-md">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-6 sm:mb-8">
        Entertainment News
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {currentPosts.map((post, index) => (
          <animated.div
            key={index}
            style={hoverSpring}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] p-4 sm:p-5"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 sm:h-48 object-cover rounded-md shadow-sm filter grayscale-[10%] hover:grayscale-0 transition-all duration-500"
            />
            <div className="mt-3">
              <div className="text-xs text-gray-600 uppercase tracking-wide mb-1 sm:mb-2">
                <span className="text-blue-600 font-semibold mr-2">{post.category}</span>
                <span className="text-gray-400">| {post.date}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 hover:text-blue-600 cursor-pointer transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed text-justify">
                {post.content}
              </p>
            </div>
          </animated.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8">
        <div className="flex flex-wrap justify-center items-center gap-2 px-2 overflow-x-auto sm:overflow-visible">
          {currentPage > 1 && (
            <animated.button
              style={paginationSpring}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="flex items-center px-3 py-2 rounded-md border text-sm text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <FaChevronLeft className="mr-1" />
              Prev
            </animated.button>
          )}

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

          {currentPage < totalPages && (
            <animated.button
              style={paginationSpring}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="flex items-center px-3 py-2 rounded-md border text-sm text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Next
              <FaChevronRight className="ml-1" />
            </animated.button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EntertainmentPosts;
