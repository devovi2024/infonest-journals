import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'; 

const SciencePosts = ({ posts }) => {
  // Filter posts to only include science category
  const sciencePosts = posts.filter(
    (post) => post.category.toLowerCase() === 'science'
  );

  // Animation for hover effect
  const hoverSpring = useSpring({
    transform: 'scale(1)',
    from: { transform: 'scale(0.98)' },
    config: { tension: 300, friction: 20 },
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Calculate the index of the first and last post on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Slice the posts array to display only the posts for the current page
  const currentPosts = sciencePosts.slice(indexOfFirstPost, indexOfLastPost);

  // Function to go to the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(sciencePosts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-white p-4 font-serif">
      {/* Header */}
      <h2 className="text-xl font-light text-[#333] mb-6 border-b-[2px] border-gray-300 pb-2">
        Science
      </h2>

      {/* News Items Container with responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {currentPosts.length > 0 ? (
          currentPosts.map((item, index) => (
            <animated.div
              key={index}
              style={hoverSpring}
              className="flex items-start bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              {/* Image with Red Circle and Lightning Bolt */}
              <div className="relative flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.headline}
                  className="w-16 h-16 object-cover rounded transition-all duration-500 ease-in-out hover:grayscale-0"
                />
                <div className="absolute top-0 left-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="ml-4 flex-1">
                <div className="text-xs text-blue-500 font-light">
                  {item.category} <span className="text-gray-400">| {item.date}</span>
                </div>
                <h3 className="text-base font-medium text-gray-700 mt-1 hover:text-[#0056b3] cursor-pointer transition-colors duration-200">
                  {item.title1}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <button className="px-3 py-1.5 border border-[#ddd] text-[#555] text-xs font-medium rounded hover:bg-gray-100 transition-all duration-300">
                  READ MORE
                </button>
              </div>
            </animated.div>
          ))
        ) : (
          <p className="text-gray-500 font-serif text-sm">No science news available.</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 rounded hover:bg-gray-100 disabled:opacity-50"
        >
          Previous
        </button>
        <div className="text-sm text-gray-500">
          Page {currentPage} of {Math.ceil(sciencePosts.length / postsPerPage)}
        </div>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(sciencePosts.length / postsPerPage)}
          className="px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 rounded hover:bg-gray-100 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SciencePosts;
