import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MostView({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const currentPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="bg-gradient-to-tr from-blue-50 via-white to-indigo-100 p-6 md:p-8 rounded-lg shadow-xl max-w-screen-lg mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          🔥 Most Viewed
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="p-2 border rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === Math.ceil(posts.length / postsPerPage)}
            className="p-2 border rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {currentPosts.map((post, index) => (
          <div
            key={post.id}
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 h-auto"
          >
            <img
              src={post.img}
              alt={post.title1}
              className="w-full h-32 sm:h-36 md:h-40 object-cover rounded-md mb-4"
            />
            <div className="text-xs text-blue-500 font-semibold mb-1 flex justify-between">
              <span>{post.category}</span>
              <span className="text-gray-400">{post.date}</span>
            </div>
            <h3 className="text-sm font-semibold text-gray-800">{post.title1}</h3>
            <div className="flex justify-end text-lg text-gray-500 opacity-50 mt-2">
              <span>{index + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
