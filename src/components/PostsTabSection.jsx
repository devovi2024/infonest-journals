import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RelatedPosts from "./RelatedPosts";
import PopularSection from "./PopularSection";
import RecentSection from "./RecentSection";

const PostsTabSection = ({ posts, category }) => {
  const [activeTab, setActiveTab] = useState("related");
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-4">
      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => handleTabClick("related")}
          className={`px-4 py-2 rounded ${
            activeTab === "related" ? "bg-blue-500 text-white" : "text-gray-700"
          }`}
        >
          Related
        </button>
        <button
          onClick={() => handleTabClick("popular")}
          className={`px-4 py-2 rounded ${
            activeTab === "popular" ? "bg-blue-500 text-white" : "text-gray-700"
          }`}
        >
          Popular
        </button>
        <button
          onClick={() => handleTabClick("recent")}
          className={`px-4 py-2 rounded ${
            activeTab === "recent" ? "bg-blue-500 text-white" : "text-gray-700"
          }`}
        >
          Recent
        </button>
      </div>

      {/* Tab Content */}
      <div className="mb-6">
        {activeTab === "related" && (
          <RelatedPosts
            posts={posts}
            currentPostId={null}
            currentPostCategory={category}
          />
        )}
        {activeTab === "popular" && <PopularSection posts={posts} />}
        {activeTab === "recent" && <RecentSection posts={posts} />}
      </div>
    </div>
  );
};

export default PostsTabSection;
