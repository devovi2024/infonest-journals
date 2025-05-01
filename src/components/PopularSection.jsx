import PostCard from "../components/PostCard";

const PopularSection = ({ posts }) => {
  if (!posts || posts.length === 0) return null;

  const popularPosts = [...posts]
    .sort((a, b) => b.views - a.views)
    .slice(0, 8);

  return (
    <div className="popular-news mt-10">
      <h2 className="text-xl font-bold mb-4">⭐ Popular Posts</h2>
      <div className="popular-grid grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {popularPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
