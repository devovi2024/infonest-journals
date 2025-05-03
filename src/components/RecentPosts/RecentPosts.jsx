import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../RecentPosts/Recent.css'; // Importing the CSS file for styles

// Mock data for recent posts
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

const RecentPosts = ({ posts }) => {
  // Sorting posts by date in descending order
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Return a message if no posts are available
  if (sortedPosts.length === 0) {
    return <p>No recent posts available.</p>;
  }

  return (
    <div className="recent-posts-container"> {/* Add the background class here */}
      {sortedPosts.map((article) => (
        <div
          key={article.title}
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
              <span>{new Date(article.date).toLocaleDateString()}</span>
            </div>
            <Link to={`/post/${article.slug}`} className="text-blue-500 hover:underline">
              <h3 className="text-base font-bold text-[#2f1c11] hover:text-[#a34d2d] cursor-pointer">
                {article.title}
              </h3>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentPosts;
