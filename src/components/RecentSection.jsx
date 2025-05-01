import PostCard from "../components/PostCard";

const RecentSection = ({ posts }) => {
  if (!posts || posts.length === 0) return null;

  const recentPosts = [...posts]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 6); 

  return (
    <div className="recent-news mt-10">
      <h2 className="text-xl font-bold mb-4">🆕 Recent Posts</h2>
      <div className="recent-grid grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {recentPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RecentSection;
