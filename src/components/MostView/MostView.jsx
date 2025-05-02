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
    <div className="bg-gray-50 p-8 rounded-lg shadow-lg w-full max-w-md font-serif">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Most Shared</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="p-2 border rounded hover:bg-gray-100"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 border rounded hover:bg-gray-100"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      <div className="space-y-6">
        {currentPosts.map((post, index) => (
          <div
            key={post.id}
            className="flex items-start gap-4 relative bg-white p-4 rounded-lg shadow-sm"
          >
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
              <div className="text-xs text-blue-600 font-semibold mb-1">
                {post.category}
                <span className="text-gray-400"> / {post.date}</span>
              </div>
              <h3 className="text-sm font-medium leading-tight">{post.title}</h3>
            </div>
            <span className="text-4xl text-gray-300 font-bold absolute right-2 top-2">
              {index + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
