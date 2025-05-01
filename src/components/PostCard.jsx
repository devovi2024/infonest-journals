import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  if (!post) return null;

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
      
      <Link
        to={`/post/${post.slug}`}
        className="text-blue-500 hover:underline"
      >
        Read more
      </Link>
    </div>
  );
};

export default PostCard;
