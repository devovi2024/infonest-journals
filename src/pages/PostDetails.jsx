import { useParams } from "react-router-dom";
import RelatedPosts from "../components/RelatedPosts";
import CommentsSection from "../components/CommentsSection";
import CategoryList from "../components/CategoryList";
import PostsTabSection from "../components/PostsTabSection";
import MostView from "../components/MostView";

const PostDetails = ({ posts, categories }) => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found.</div>;
  }

  const initialComments = [
    {
      id: 1,
      postId: post.id,
      content: "Great post! Learned a lot.",
      author: "John Doe",
      date: "2025-04-27 10:00",
    },
    {
      id: 2,
      postId: post.id,
      content: "Thanks for the insights!",
      author: "Jane Smith",
      date: "2025-04-27 11:00",
    },
  ];

  return (
    <section className="p-6 flex">
      <div className="post-details space-y-8">
        {/* Post Title and Content */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-700 mb-6">{post.content}</p>
          <div className="author text-gray-500">
            <h3 className="font-semibold">By: {post.author}</h3>
            <p>{post.date}</p>
          </div>
        </div>

        {/* Related Posts Section */}
        <RelatedPosts
          posts={posts}
          currentPostId={post.id}
          currentPostCategory={post.category}
        />

        {/* Comments Section */}
        <CommentsSection comments={initialComments} postId={post.id} />
      </div>

      <div>
        {/* Posts Tab Section */}
        <PostsTabSection posts={posts} category={post.category} />
        
        {/* Category List */}
        <CategoryList categories={categories} />
        
        {/* Most View Section */}
        <MostView posts={posts} />
      </div>
    </section>
  );
};

export default PostDetails;
