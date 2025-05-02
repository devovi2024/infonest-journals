import React, { useState } from 'react';

const EntertainmentPosts = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="px-6 py-10 bg-gray-50 font-serif max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold tracking-tight text-[#1a1a1a] border-b-[3px] border-gray-300 pb-3 mb-8">
        Entertainment News
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {currentPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-60 object-cover filter grayscale-[10%]"
            />
            <div className="p-5">
              <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                <span className="text-[#0056b3] font-semibold mr-2">{post.category}</span>
                <span className="text-gray-400">| {post.date}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#1a1a1a] leading-tight mb-3 hover:text-[#0056b3] cursor-pointer transition-colors duration-200">
                {post.title}
              </h3>
              <p className="text-md text-[#333333] leading-relaxed text-justify">
                {post.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-1.5 rounded-md border font-serif text-sm ${
              currentPage === index + 1
                ? 'bg-[#0056b3] text-white font-bold'
                : 'bg-white text-[#0056b3] border-[#0056b3]'
            } transition duration-300`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EntertainmentPosts;
