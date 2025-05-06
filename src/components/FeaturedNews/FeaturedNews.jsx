import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeaturedNews = ({ posts }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 640 ? 1 : 4);
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const nextPage = () => {
    const nextIndex = startIndex + itemsPerPage;
    setStartIndex(nextIndex >= posts.length ? 0 : nextIndex);
  };

  const prevPage = () => {
    const prevIndex = startIndex - itemsPerPage;
    setStartIndex(prevIndex < 0 ? 0 : prevIndex);
  };

  const displayedPosts = posts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full px-4 py-10 bg-white text-black">
      {/* Header with Title and Arrows */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#5C4033] tracking-wide">Featured Stories</h2>
        <div className="flex space-x-2">
          <button
            onClick={prevPage}
            className="p-2 text-[#5C4033] hover:text-[#C1440E]"
            disabled={startIndex === 0}
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextPage}
            className="p-2 text-[#5C4033] hover:text-[#C1440E]"
            disabled={startIndex + itemsPerPage >= posts.length}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Grid of Posts */}
      <motion.div
        key={startIndex}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -50, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${itemsPerPage > 2 ? 4 : itemsPerPage} gap-6`}
      >
        <AnimatePresence mode="sync">
          {displayedPosts.map((article, index) => (
            <motion.div
              key={`${index}-${article.category}`}
              className="relative rounded-xl overflow-hidden bg-cover bg-center min-h-[320px] shadow-lg"
              style={{ backgroundImage: `url(${article.image})` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#5C4033]/70 flex flex-col justify-end p-4 sm:p-6 space-y-1">
                {/* Category & Date */}
                <div className="text-sm text-white font-semibold tracking-wider flex items-center gap-2">
                  <span className="uppercase">{article.category}</span>
                  <span>/</span>
                  <span>{article.date}</span>
                </div>

                {/* Title */}
                <Link to={`/post/${article.slug}`}>
                  <h3 className="text-lg font-bold text-white leading-snug hover:underline">
                    {article.title1}
                  </h3>
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FeaturedNews;
