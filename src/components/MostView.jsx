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

  // Get the posts for the current page
  const currentPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Most View</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="p-1 border rounded hover:bg-gray-100"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="p-1 border rounded hover:bg-gray-100"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      <div className="space-y-6">
        {currentPosts.map((post, index) => (
          <div key={post.id} className="flex items-start gap-4 relative">
            <div className="relative">
              <img
                src={post.img}
                alt={post.title}
                className="w-24 h-16 object-cover rounded"
              />
              <span className="absolute top-1 left-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                ⚡
              </span>
            </div>
            <div className="flex-1">
              <div className="text-xs text-blue-600 font-semibold">
                {post.category}
                <span className="text-gray-400"> / {post.date}</span>
              </div>
              <h3 className="text-sm font-medium mt-1">{post.title}</h3>
            </div>
            <span className="text-4xl text-gray-300 font-bold absolute right-0 top-2">
              {index + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
