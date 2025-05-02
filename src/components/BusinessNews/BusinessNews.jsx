import React, { useState } from 'react';

const BusinessNews = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Filter posts by "business" category
  const businessPosts = posts.filter((post) => post.category.toLowerCase() === 'business');

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = businessPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-serif font-bold text-gray-900">Business News</h2>
        <a href="#" className="text-sm font-semibold text-gray-600 hover:text-blue-600">
          SEE ALL
        </a>
      </div>

      <div className="space-y-12">
        {currentPosts.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row gap-8">
            <img
              src={item.image}
              alt={item.title}
              className="w-full md:w-2/5 h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="flex flex-col justify-between">
              <div>
                <div className="text-sm text-gray-600 font-semibold mb-3">
                  <span className="text-blue-600">{item.author}</span> <span className="mx-1">/</span> {item.date}
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 hover:text-blue-600 transition">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-700 text-base">{item.description}</p>
              </div>
              <div className="mt-6">
                <button className="px-6 py-3 bg-gray-200 text-gray-900 rounded-full hover:bg-gray-300 transition text-sm font-medium">
                  Read more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <ul className="flex space-x-2">
          {[...Array(Math.ceil(businessPosts.length / postsPerPage)).keys()].map((num) => (
            <li key={num}>
              <button
                onClick={() => paginate(num + 1)}
                className={`px-4 py-2 rounded-full ${
                  currentPage === num + 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                } hover:bg-blue-600 hover:text-white transition`}
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
