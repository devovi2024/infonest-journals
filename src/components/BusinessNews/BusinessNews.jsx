import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BusinessNews = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const businessPosts = posts.filter(
    (post) => post.category?.toLowerCase() === 'business'
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = businessPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-serif font-bold text-gray-900">Business News</h2>
        <Link
          to={`/category/business`}
          className="text-xs font-semibold text-gray-600 hover:text-blue-600"
        >
          SEE ALL
        </Link>
      </div>

      {/* News Cards */}
      <div className="space-y-6">
        {currentPosts.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 hover:bg-blue-50 rounded-lg p-4 bg-white"
          >
            <img
              src={item.image}
              alt={item.title1}
              className="w-full md:w-1/3 h-48 object-cover rounded-lg shadow-md transition-all duration-300 transform hover:scale-110"
            />
            <div className="flex flex-col justify-between">
              <div>
                <div className="text-xs text-gray-600 font-semibold mb-2">
                  <span className="text-blue-600">{item.author}</span>
                  <span className="mx-1">/</span> {item.date}
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 hover:text-blue-600 transition-all duration-300">
                  {item.title1}
                </h3>
                <p className="mt-2 text-gray-700 text-sm">{item.description}</p>
              </div>
              <div className="mt-4">
                <button className="px-4 py-2 bg-gray-200 text-gray-900 rounded-full hover:bg-blue-600 hover:text-white transition text-xs font-medium">
                  Read more <FaChevronRight className="inline-block text-xs" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <ul className="flex space-x-2">
          {[...Array(Math.ceil(businessPosts.length / postsPerPage)).keys()].map((num) => (
            <li key={num}>
              <button
                onClick={() => paginate(num + 1)}
                className={`px-3 py-1 rounded-full ${
                  currentPage === num + 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                } hover:bg-blue-600 hover:text-white transition-all duration-300`}
              >
                {num + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BusinessNews;
