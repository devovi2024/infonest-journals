import React from 'react';

const SportsPosts = ({ posts }) => {
  // Filter only sports category posts
  const sportsPosts = posts.filter(post => post.category.toLowerCase() === 'sports');

  return (
    <div className="bg-[#f7f7f7] p-6">
      {/* Header */}
      <h2 className="text-3xl font-serif font-bold text-[#2d2d2d] mb-8 border-b-2 border-gray-300 pb-2">
        Sports News
      </h2>

      {/* Scrollable News Container */}
      <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pr-2">
        {sportsPosts.length > 0 ? (
          sportsPosts.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden mb-6"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.headline}
                  className="w-full h-40 object-cover"
                />
                {/* Red Circle with Lightning Bolt */}
                <div className="absolute top-3 left-3 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
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
              <div className="p-6">
                <div className="text-sm text-[#0056b3] font-semibold">
                  {item.category} <span className="text-gray-500">/ {item.date}</span>
                </div>
                <h3 className="text-2xl font-serif font-extrabold text-[#1a1a1a] mt-2 mb-4">
                  {item.headline}
                </h3>
                <p className="text-lg font-serif text-[#4a4a4a] mb-4">
                  {item.description}
                </p>
                <button className="px-5 py-2 border border-[#ccc] text-[#555] text-sm font-medium rounded hover:bg-gray-100 transition">
                  READ MORE
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 font-serif">No sports news available.</p>
        )}
      </div>
    </div>
  );
};

export default SportsPosts;
