import PostCard from "./PostCard";

const EnvironmentSection = ({ posts }) => {
  if (!posts || posts.length === 0) return null;

  const businessPosts = posts.filter((post) => post.category === "Environment");

  if (businessPosts.length === 0) return null;

  return (
    <div className="business-news   mt-10">
      <h2 className="text-xl font-bold mb-4">💼 Environment News</h2>
      <div className="business-grid grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {businessPosts.map((post) => (
          <div
            key={post.id}
            className="business-card border-2 border-green-500 p-4 rounded-lg shadow-md hover:shadow-xl transition-all"
          >
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnvironmentSection;
