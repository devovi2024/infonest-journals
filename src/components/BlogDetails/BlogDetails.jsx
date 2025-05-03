import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaRegComment } from "react-icons/fa";
import ResponsesSidebar from '../ResponsesSidebar/ResponsesSidebar';

const BlogDetails = ({ posts }) => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const [showResponse, setShowResponse] = useState(false);

  if (!post) {
    return <div className="p-6 max-w-3xl mx-auto">Post not found.</div>;
  }

  return (
    <div className="relative p-6 max-w-3xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
        {post.title3}
      </h1>

      {/* Author */}
      <div className="flex items-center mb-6">
        <img
          src={post.image} // Use the correct image from the post object
          alt="Author"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-800">{post.author}</span>
            <button className="border border-gray-300 text-gray-700 text-xs font-medium py-1 px-3 rounded-full hover:bg-gray-100">
              Follow
            </button>
          </div>
          <span className="text-xs text-gray-500">{post.readtime}</span>
        </div>
      </div>

      {/* Interaction Icons */}
      <div className="flex items-center space-x-4 mb-6">
        <button className="flex items-center text-gray-600 hover:text-gray-800">
          <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-xs">{post.like}</span>
        </button>

        <button className="flex items-center text-gray-600 hover:text-gray-800">
          <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01" />
          </svg>
          <span className="text-xs">{post.comment}</span>
        </button>

        <button onClick={() => setShowResponse(!showResponse)} className="text-blue-500 hover:underline text-xl">
          <FaRegComment />
        </button>
      </div>

      {/* Content */}
      <div className="text-gray-800 leading-relaxed text-base">
        <p className="mb-6">{post.content1}</p>
        <p>{post.content2}</p>
      </div>

      {/* Sidebar Slide-In */}
      {showResponse && (
        <div className="fixed inset-0 z-40">
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-black opacity-30" onClick={() => setShowResponse(false)}></div>

          {/* Slide-In Panel */}
          <div className="fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0 z-50">
            <ResponsesSidebar posts={posts} onClose={() => setShowResponse(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
