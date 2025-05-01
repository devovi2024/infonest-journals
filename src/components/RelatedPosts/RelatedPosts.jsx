import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const RelatedPosts = ({ posts, currentCategory }) => {
  const relatedPosts = posts.filter((article) => article.category === currentCategory);

  return (
    <>
      {relatedPosts.map((article, index) => (
        <div
          key={index}
          className="flex items-center border-b border-[#d4c4b0] border-dashed py-4 last:border-b-0"
        >
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
              <span>{article.date}</span>
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

export default RelatedPosts;
