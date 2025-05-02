import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const BusinessPosts = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  // Filter business category posts
  const filterPosts = () => {
    const filtered = posts.filter(post => post.category === "Business");
    setFilteredPosts(filtered);
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Business Posts
        </h2>
        {/* Filter Button */}
        <div className="text-center mb-6">
          <button
            onClick={filterPosts}
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300"
          >
            Filter Business Posts
          </button>
        </div>
        {/* Posts Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map(post => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 hover:rotate-2 hover:bg-blue-50"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover transition-all duration-300 transform hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-all duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  By {post.author} | {post.date}
                </p>
                <p className="text-gray-700 mb-4">{post.content.slice(0, 100)}...</p>
                <a
                  href={`/post/${post.slug}`}
                  className="text-blue-600 hover:underline flex items-center space-x-2"
                >
                  <span>Read more</span>
                  <FaChevronRight className="text-sm" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessPosts;
