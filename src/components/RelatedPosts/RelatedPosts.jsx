import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../RelatedPosts/Related.css';

const formatDate = (dateString) => {
  const options = { day: 'numeric', month: 'short', year: '2-digit' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const RelatedPosts = ({ posts, currentCategory }) => {
  const relatedPosts = posts.filter((article) => article.category === currentCategory);

  return (
    <div className="p-2 popular-posts-wrapper sm:px-6 md:px-8 lg:px-10 mx-auto text-[#3b2c23] font-serif text-sm leading-relaxed tracking-wide">
      {relatedPosts.length > 0 ? (
        relatedPosts.map((article, index) => (
          <div
            key={index}
            className="flex items-center py-4"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-23 h-25 object-cover rounded-md shadow-sm mr-4"
            />
            <div className="flex-1">
              <div className="flex items-center text-xs sm:text-sm text-[#5b341b] mb-1 flex-wrap gap-1">
                <span className="uppercase font-semibold tracking-widest">{article.category}</span>
                <div className='flex items-center gap-1 text-nowrap'>
                <FaCalendarAlt className="text-[#a34d2d]" />
                <span>{formatDate(article.date)}</span>
                </div>
              </div>

              <Link to={`/post/${article.slug}`} className="text-blue-500 hover:underline">
                <h3 className="text-[#2f1c11] hover:text-[#a34d2d] text-sm sm:text-base font-bold leading-snug tracking-wide cursor-pointer transition duration-200">
                  {article.title1}
                </h3>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No related posts found in this category.</p>
      )}
    </div>
  );
};

export default RelatedPosts;
