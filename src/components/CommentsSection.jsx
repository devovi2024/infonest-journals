import { useState } from "react";
import CommentItem from "./CommentItem";

const CommentsSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "John Doe",
      date: "2025-04-27",
      content: "This is an amazing post!",
      replies: [],
    },
    {
      id: 2,
      author: "Jane Smith",
      date: "2025-04-26",
      content: "Thanks for sharing such useful information.",
      replies: [],
    },
    {
      id: 3,
      author: "Alex Johnson",
      date: "2025-04-25",
      content: "I learned a lot from this post!",
      replies: [],
    },
  ]);




  const [newComment, setNewComment] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;

    const comment = {
      id: Date.now(),
      author: "Anonymous",
      date: new Date().toLocaleDateString(),
      content: newComment,
      replies: [],
    };

    setComments([...comments, comment]);
    setNewComment("");
  };

  const handleReply = (parentId, replyText) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === parentId) {
        const updatedReplies = [...(comment.replies || []), {
          id: Date.now(),
          author: "Anonymous",
          date: new Date().toLocaleDateString(),
          content: replyText,
        }];
        return { ...comment, replies: updatedReplies };
      }
      return comment;
    });

    setComments(updatedComments);
  };

  return (
    <div className="comments-section mt-10">
      <h2 className="text-xl font-bold mb-4">💬 Comments</h2>

      <form onSubmit={handleAddComment} className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full p-2 border rounded mb-2"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Post Comment
        </button>
      </form>

      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} onReply={handleReply} />
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default CommentsSection;
