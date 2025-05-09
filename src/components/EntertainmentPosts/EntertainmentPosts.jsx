import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion'; 
import { Link } from 'react-router-dom';
import '../EntertainmentPosts/Entertain.css';

const EntertainmentPosts = ({ posts }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 500;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="px-4 py-6 font-serif bg-paper-light shadow-paper rounded-md">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-6 sm:mb-8">
        Entertainment News
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 hover:bg-blue-100"
          onClick={() => scroll('left')}
        >
          <FaChevronLeft />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 sm:gap-8 scroll-smooth px-10 scrollbar-hide"
        >
          {posts.map((post, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }} // ✅ Framer motion animation
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="min-w-[250px] sm:min-w-[300px] max-w-xs rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out flex-shrink-0"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 sm:h-48 object-cover rounded-md shadow-sm filter grayscale-[10%] hover:grayscale-0 transition-all duration-500"
              />
              <div className="mt-3">
                <div className="text-xs text-gray-600 uppercase tracking-wide mb-1 sm:mb-2">
                  <span className="text-blue-600 font-semibold mr-2">{post.category}</span>
                  <span className="text-gray-400">| {post.date}</span>
                </div>
                <Link
                  to={`/post/${post.slug}`}
                  className="text-lg sm:text-xl font-semibold text-gray-800 hover:text-blue-600 cursor-pointer transition-colors duration-300 line-clamp-2"
                >
                  {post.title1}
                </Link>
                <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed text-justify">
                  {post.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-blue-100"
          onClick={() => scroll('right')}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default EntertainmentPosts;
