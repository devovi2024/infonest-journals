import React, { useState } from 'react';
import { FaHeart, FaShare } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ShabdoDhara = ({ posts }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;
  const currentItems = posts.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (startIndex + itemsPerPage < posts.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <div className="px-4 sm:px-6  bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600 tracking-wide text-center md:text-left">
          Discover ShabdoDhara
        </h2>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 mt-4">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-shadow duration-300"
          >
            {/* Background Layer */}
            <div className="absolute inset-0 bg-indigo-50 scale-105 group-hover:scale-110 transition-transform duration-500"></div>

            {/* Content */}
            <div className="relative z-10 p-4 sm:p-6">
              <div className="flex justify-between items-center mb-1 sm:mb-2">
                <span className="text-xs sm:text-sm font-medium text-indigo-600">{item.category}</span>
                <span className="text-xs text-gray-400">{item.date}</span>
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                {item.title}
              </h3>
              <div className="flex items-center space-x-3 mt-3">
                <div className="flex items-center text-gray-500 text-xs sm:text-sm space-x-1">
                  <FaHeart className="text-red-400" />
                  <span>{item.likes}</span>
                </div>
                <div className="flex items-center text-gray-500 text-xs sm:text-sm space-x-1">
                  <FaShare className="text-blue-400" />
                  <span>{item.shares}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">

<div className="flex mt-5 space-x-3 sm:space-x-0 sm:flex-col lg:flex-row lg:justify-between">
  <button
    onClick={handlePrev}
    className="px-3 py-2 bg-indigo-100 text-indigo-600 rounded-full hover:bg-indigo-200"
  >
    <FaArrowLeft />
  </button>
  <button
    onClick={handleNext}
    className="px-3 py-2 bg-indigo-100 text-indigo-600 rounded-full hover:bg-indigo-200"
  >
    <FaArrowRight />
  </button>
</div>

      </div>
    </div>
  );
};

export default ShabdoDhara;
