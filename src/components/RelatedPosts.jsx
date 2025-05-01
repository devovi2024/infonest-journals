import PostCard from "../components/PostCard";

const RelatedPosts = ({ posts, currentPostId, currentPostCategory }) => {
  if (!posts || posts.length === 0) return null;

  const relatedPosts = posts.filter(
    (post) => post.id !== currentPostId && post.category === currentPostCategory
  );

  if (relatedPosts.length === 0) return null;

  return (
    <div className="related-posts mt-10">
      <h2 className="text-xl font-bold mb-4">📝 Related Posts</h2>
      <div className="related-grid grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
