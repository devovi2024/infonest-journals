import { useParams, Link } from "react-router-dom";
import PostsTabSection from "../components/PostsTabSection"; // ✅ Import your PostsTabSection

const CategoryPage = ({ posts }) => {
  const { slug } = useParams();
  const filteredPosts = posts.filter(
    (post) => post.category.toLowerCase() === slug.toLowerCase()
  );

  return (
    <div className="category-page">
      <h1 className="text-3xl font-bold mb-6">Category: {slug}</h1>
      <div>
        <div>
          {filteredPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <div key={post.id} className="p-4 border rounded shadow">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="text-gray-600">{post.content.substring(0, 100)}...</p>
                  <Link to={`/post/${post.slug}`} className="text-blue-500 hover:underline">
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p>No posts found for this category.</p>
          )}
        </div>

        {/* Show Tab Section Here */}
        <div className="mt-10">
          <PostsTabSection posts={filteredPosts} category={slug} />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
