import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: "How to Build a React App",
    category: "Development",
    image: "https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg",
    date: "2025-04-25",
    slug: "how-to-build-a-react-app",
  },
  {
    title: "Exploring the World of JavaScript",
    category: "Programming",
    image: "https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg",
    date: "2025-05-01",
    slug: "exploring-the-world-of-javascript",
  },
  {
    title: "Top 10 React Libraries",
    category: "Development",
    image: "https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg",
    date: "2025-04-28",
    slug: "top-10-react-libraries",
  },
  {
    title: "Why You Should Learn Vue.js",
    category: "Frameworks",
    image: "https://i.ibb.co/9mxRkrrN/pexels-pixabay-262508.jpg",
    date: "2025-05-02",
    slug: "why-you-should-learn-vue-js",
  },
];

const formatDate = (dateString) => {
  const options = { day: 'numeric', month: 'short', year: '2-digit' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const RecentPosts = ({ posts }) => {
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  // If no posts are available, show a message
  if (sortedPosts.length === 0) {
    return <p>No recent posts available.</p>;
  }

  return (
    <div className="p-2 popular-posts-wrapper sm:px-6 md:px-8 lg:px-10 mx-auto text-[#3b2c23] font-serif text-sm leading-relaxed tracking-wide">
      {sortedPosts.map((article, index) => (
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
              <div className="flex items-center gap-1 text-nowrap">
                <FaCalendarAlt className="mr-1 text-[#a34d2d]" />
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
      ))}
    </div>
  );
};

export default RecentPosts;
