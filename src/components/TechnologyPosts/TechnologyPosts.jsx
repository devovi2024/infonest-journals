import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TechnologyPosts = ({ posts }) => {
  const techPosts = posts.filter(post => post.category === 'Technology');
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 2;

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - cardsPerPage < 0 ? techPosts.length - cardsPerPage : prev - cardsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + cardsPerPage >= techPosts.length ? 0 : prev + cardsPerPage
    );
  };

  const visibleCards =
    techPosts.slice(currentIndex, currentIndex + cardsPerPage).length < cardsPerPage
      ? [
          ...techPosts.slice(currentIndex),
          ...techPosts.slice(0, cardsPerPage - (techPosts.length - currentIndex)),
        ]
      : techPosts.slice(currentIndex, currentIndex + cardsPerPage);

  return (
    <div className="rounded-lg px-4 py-10 font-serif text-[#2b2b2b] bg-[#fdfaf6]">
      <div className="flex items-center justify-between mb-8 border-b pb-2 border-[#ddd]">
        <h2 className="text-3xl font-bold text-[#3a2f25] tracking-wide">Technology Stories</h2>
        <div className="flex space-x-2">
          <button onClick={handlePrev} className="border p-2 rounded hover:bg-[#ececec] text-[#3a2f25]">
            <FaChevronLeft />
          </button>
          <button onClick={handleNext} className="border p-2 rounded hover:bg-[#ececec] text-[#3a2f25]">
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        {visibleCards.map((news) => (
          <div key={news.id} className="relative group overflow-hidden rounded-md shadow-md bg-white">
            <img
              src={news.image}
              alt={news.title1}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white">
              <div className="text-sm italic mb-1">
                {news.category} &mdash; {news.date}
              </div>
              <Link to={`/post/${news.slug}`} className="hover:underline">
                <h3 className="text-xl font-bold leading-snug">{news.title1}</h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyPosts;
