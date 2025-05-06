import { useParams, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import NewsTabs from "../components/NewsTabs/NewsTabs";
import CategoryList from "./CategoryList";

const CategoryPage = ({ posts, categories }) => {
  const { slug } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts by category
  const filteredPosts = useMemo(() => posts.filter(post => post.category.toLowerCase() === slug.toLowerCase()), [slug, posts]);

  // Filter posts by date
  const getDateFilteredPosts = (posts) => {
    const now = new Date();
    return posts.filter(post => {
      const postDate = new Date(post.date);
      const diffDays = (now - postDate) / (1000 * 60 * 60 * 24);

      switch (dateFilter) {
        case "recent": return diffDays <= 3;
        case "7days": return diffDays <= 7;
        case "month": return postDate.getMonth() === now.getMonth() && postDate.getFullYear() === now.getFullYear();
        case "year": return postDate.getFullYear() === now.getFullYear();
        default: return true;
      }
    });
  };

  const timeFilteredPosts = useMemo(() => getDateFilteredPosts(filteredPosts), [dateFilter, filteredPosts]);
  
  const searchedPosts = useMemo(() => timeFilteredPosts.filter(post => post.title1.toLowerCase().includes(searchTerm.toLowerCase())), [searchTerm, timeFilteredPosts]);

  // Pagination logic
  const currentPosts = useMemo(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return searchedPosts.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage, searchedPosts]);

  const totalPages = Math.ceil(searchedPosts.length / postsPerPage);

  return (
    <div className="category-page px-4 mb-10 sm:px-6 lg:px-8 max-w-screen-xl mx-auto mt-6 font-sans">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 capitalize text-center sm:text-left">
        Category: {slug}
      </h1>

      {/* Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start items-center">
        <input
          type="text"
          placeholder="Search posts by title..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); 
          }}
          className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={dateFilter}
          onChange={(e) => {
            setDateFilter(e.target.value);
            setCurrentPage(1); 
          }}
          className="w-full sm:w-60 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Dates</option>
          <option value="recent">Recent (3 days)</option>
          <option value="7days">Last 7 Days</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
        </select>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 min-h-[300px]">
          {currentPosts.length === 0 ? (
            <p className="text-center text-gray-500">No posts found matching your filters.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {currentPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
                    <img src={post.image} alt={post.title1} className="w-full h-44 sm:h-48 object-cover" />
                    <div className="p-4 flex flex-col">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
                        <span className="text-blue-600 uppercase font-medium">{post.category}</span>
                        <span>{post.date}</span>
                      </div>
                      <Link to={`/post/${post.slug}`} className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">{post.title1}</Link>
                      <p className="text-sm text-gray-600 line-clamp-3">{post.content.substring(0, 120)}...</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-8 space-x-2">
                  <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1} className="px-3 py-1 border rounded hover:bg-blue-100 disabled:opacity-50">
                    Prev
                  </button>
                  {[...Array(totalPages)].map((_, idx) => (
                    <button key={idx} onClick={() => setCurrentPage(idx + 1)} className={`px-3 py-1 border rounded ${currentPage === idx + 1 ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`}>
                      {idx + 1}
                    </button>
                  ))}
                  <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className="px-3 py-1 border rounded hover:bg-blue-100 disabled:opacity-50">
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Sidebar with News Tabs */}
        <div className="w-full lg:w-[390px] mt-8 lg:mt-0 lg:sticky">
          <div className="bg-white shadow-sm rounded-md border border-gray-200 print:text-black">
            <NewsTabs posts={filteredPosts} category={slug} />
            <CategoryList posts={posts} categories={categories}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
