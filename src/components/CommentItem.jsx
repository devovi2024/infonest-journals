import { useState } from "react";

const CommentItem = ({ comment, onReply }) => {
  const [replyText, setReplyText] = useState("");
  const [showReply, setShowReply] = useState(false);

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (replyText.trim() === "") return;
    onReply(comment.id, replyText);
    setReplyText("");
    setShowReply(false);
  };

  return (
    <div className="comment p-4 border rounded mb-4">
      <strong>{comment.author}</strong> - <span>{comment.date}</span>
      <p className="mt-1">{comment.content}</p>

      <button
        onClick={() => setShowReply(!showReply)}
        className="text-blue-500 text-sm mt-2"
      >
        {showReply ? "Cancel" : "Reply"}
      </button>

      {showReply && (
        <form onSubmit={handleReplySubmit} className="ml-4 mt-2">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply"
            className="w-full p-2 border rounded mb-2"
          />
          <button type="submit" className="px-3 py-1 bg-green-500 text-white rounded text-sm">
            Send Reply
          </button>
        </form>
      )}

      {(comment.replies || []).length > 0 && (
        <div className="ml-6 mt-4 border-l pl-4">
          {(comment.replies || []).map((reply) => (
            <div key={reply.id} className="reply mb-2">
              <strong>{reply.author}</strong> - <span>{reply.date}</span>
              <p>{reply.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentItem;
