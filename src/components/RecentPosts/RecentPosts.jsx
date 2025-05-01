import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const posts = [
  {
    title: "How to Build a React App",
    category: "Development",
    image: "https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg",
    date: "2025-04-25",
  },
  {
    title: "Exploring the World of JavaScript",
    category: "Programming",
    image: "https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg",
    date: "2025-05-01",
  },
  {
    title: "Top 10 React Libraries",
    category: "Development",
    image: "https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg",
    date: "2025-04-28",
  },
  {
    title: "Why You Should Learn Vue.js",
    category: "Frameworks",
    image: "https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg",
    date: "2025-05-02",
  },
];

const RecentPosts = ({ posts }) => {
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  if (sortedPosts.length === 0) {
    return <p>No recent posts available.</p>;
  }

  return (
    <>
      {sortedPosts.map((article) => (
        <div key={article.title} className="flex items-center border-b border-[#d4c4b0] border-dashed py-4 last:border-b-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-20 h-20 object-cover rounded-md shadow-sm mr-4"
          />
          <div className="flex-1">
            <div className="flex items-center text-sm text-[#5b341b] mb-1">
              <span className="uppercase font-semibold tracking-widest">{article.category}</span>
              <span className="mx-2">/</span>
              <FaCalendarAlt className="mr-1 text-[#a34d2d]" />
              <span>{new Date(article.date).toLocaleDateString()}</span>
            </div>
            <h3 className="text-base font-bold text-[#2f1c11] hover:text-[#a34d2d] cursor-pointer">
              {article.title}
            </h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecentPosts;
