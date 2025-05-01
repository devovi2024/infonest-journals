import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const newsData = [
  {
    id: 1,
    image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
    title: 'Best garden wing supplies for the horticultural',
    category: 'Home',
    date: 'March 26, 2020',
  },
  {
    id: 2,
    image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
    title: 'Copa America: Luis Suarez from devastated US',
    category: 'TECHNOLOGY',
    date: 'March 26, 2020',
  },
  {
    id: 3,
    image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
    title: 'Best garden wing supplies for the horticultural',
    category: 'TECHNOLOGY',
    date: 'March 26, 2020',
  },
  {
    id: 4,
    image: 'https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg',
    title: 'Copa America: Luis Suarez from devastated US',
    category: 'TECHNOLOGY',
    date: 'March 26, 2020',
  },
];

const FeaturedSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 2;

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - cardsPerPage < 0 ? newsData.length - cardsPerPage : prev - cardsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + cardsPerPage >= newsData.length ? 0 : prev + cardsPerPage
    );
  };

  const visibleCards =
    newsData.slice(currentIndex, currentIndex + cardsPerPage).length < cardsPerPage
      ? [...newsData.slice(currentIndex), ...newsData.slice(0, cardsPerPage - (newsData.length - currentIndex))]
      : newsData.slice(currentIndex, currentIndex + cardsPerPage);

  return (
    <div className="rounded-lg px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#5C4033] tracking-wide">More Stories</h2>
        <div className="flex space-x-2">
          <button onClick={handlePrev} className="border p-2 rounded hover:bg-gray-100">
            <FaChevronLeft />
          </button>
          <button onClick={handleNext} className="border p-2 rounded hover:bg-gray-100">
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {visibleCards.map((news) => (
          <div key={news.id} className="relative group overflow-hidden rounded-md shadow-sm">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white">
              <div className="text-sm font-semibold">
                {news.category} <span className="font-normal">/</span> {news.date}
              </div>
              <h3 className="text-lg font-bold mt-2">{news.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
