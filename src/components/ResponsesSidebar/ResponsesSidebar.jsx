import React, { useState } from 'react';
import { FaTimes, FaThumbsUp, FaReply } from 'react-icons/fa';

const ResponsesSidebar = ({ posts, onClose }) => {
  const [newComment, setNewComment] = useState('');

  const handlePostComment = () => {
    setNewComment('');
  };

  return (
    <div className="h-full w-96 bg-white shadow-xl rounded-lg overflow-hidden flex flex-col">
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-gray-500 text-2xl hover:text-gray-700">
          <FaTimes />
        </button>
      </div>

      {/* Comments Section */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Comments</h2>
        {posts[0].comments.map((comment, index) => (
          <div key={index} className="flex space-x-4 mb-4 border-b pb-4">
            <img
              src={comment.avatar}
              alt={comment.author}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-800">{comment.author}</span>
                <span className="text-xs text-gray-500">{comment.date}</span>
              </div>
              <p className="text-gray-700 mt-2">{comment.content}</p>
              <div className="flex items-center space-x-4 mt-3">
                <button className="flex items-center text-xs text-gray-600 hover:text-blue-500">
                  <FaThumbsUp className="mr-1" /> {comment.likes}
                </button>
                <button className="flex items-center text-xs text-gray-600 hover:text-blue-500">
                  <FaReply className="mr-1" /> Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add a Comment Section */}
      <div className="mt-4 p-4 border-t">
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write a comment..."
          rows="3"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          onClick={handlePostComment}
          className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled={!newComment.trim()}
        >
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default ResponsesSidebar;
