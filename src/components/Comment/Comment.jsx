import React, { useState } from 'react';

const Comment = () => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      user: 'Noah Pierre',
      avatar: 'https://via.placeholder.com/40',
      time: '50 minutes ago',
      content: "I'm a bit unclear about how condensation forms in the water cycle. Can someone break it down?",
      likes: 25,
      dislikes: 3,
      replies: [],
      timestamp: Date.now() - 10000000, 
    },
    {
      id: 2,
      user: 'Skill Sprout',
      avatar: 'https://via.placeholder.com/40',
      time: '8 minutes ago',
      content: "Condensation happens when water vapor cools down and changes back into liquid droplets.",
      likes: 2,
      dislikes: 0,
      replies: [],
      timestamp: Date.now() - 5000000, 
      isHighlighted: true,
    },
    {
      id: 3,
      user: 'Mollie Hall',
      avatar: 'https://via.placeholder.com/40',
      time: '5 hr ago',
      content: "I really enjoyed today’s lesson on the water cycle! The animations made the processes so much easier to grasp.",
      likes: 0,
      dislikes: 0,
      replies: [],
      timestamp: Date.now() - 15000000, 
    },
  ]);
  
  const [replyText, setReplyText] = useState('');
  const [showReplyInput, setShowReplyInput] = useState(null);
  const [sortOrder, setSortOrder] = useState('mostRecent'); // Track the sorting option

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          user: 'Current User',
          avatar: 'https://i.ibb.co.com/yBgzS4z1/smiling-young-man-illustration-1308-174669.jpg',
          time: 'Just now',
          content: newComment,
          likes: 0,
          dislikes: 0,
          replies: [],
          timestamp: Date.now(),
        },
      ]);
      setNewComment('');
    }
  };

  const handleLike = (id) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  const handleDislike = (id) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, dislikes: comment.dislikes + 1 } : comment
      )
    );
  };

  const handleReply = (id, replyText) => {
    if (replyText.trim()) {
      setComments(
        comments.map((comment) =>
          comment.id === id
            ? {
                ...comment,
                replies: [
                  ...comment.replies,
                  { user: 'Current User', content: replyText, time: 'Just now' },
                ],
              }
            : comment
        )
      );
    }
    setShowReplyInput(null);
    setReplyText('');
  };

  const toggleReplyInput = (id) => {
    setShowReplyInput(showReplyInput === id ? null : id);
  };

  // Sort the comments based on the selected order
  const sortedComments = comments.sort((a, b) => {
    if (sortOrder === 'mostRecent') {
      return b.timestamp - a.timestamp; 
    } else if (sortOrder === 'oldest') {
      return a.timestamp - b.timestamp; 
    }
    return 0; // Default, no sorting
  });

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md">


      {/* Comment Input */}
      <div className="mb-4">
        <form onSubmit={handleCommentSubmit}>
          <div className="flex items-center border border-gray-300 rounded-lg bg-white">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add comment..."
              className="flex-1 p-2 rounded-l-lg focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>


             <div className='flex justify-between'>
                <div>
                            {/* Comments Header */}
                <div >
                    <h2 className="text-lg font-semibold">
                    Comments <span className="bg-orange-500 text-white text-xs rounded-full px-2 py-1">{sortedComments.length}</span>
                    </h2>
                </div>

                </div>

              {/* Sorting Options */}
                <div className="mb-4">
                    <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="border p-2 rounded-lg"
                    >
                    <option value="mostRecent">Most Recent</option>
                    <option value="oldest">Oldest</option>
                    <option value="all">All</option>
                    </select>
                </div>
            </div>

      {/* Comment List */}
      <div className="space-y-4">
        {sortedComments.map((comment) => (
          <div
            key={comment.id}
            className={`flex space-x-3 p-3 rounded-lg ${comment.isHighlighted ? 'bg-orange-50 border-l-4 border-orange-500' : 'bg-white'}`}
          >
            <img src={comment.avatar} alt={comment.user} className="w-10 h-10 rounded-full" />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">{comment.user}</span>
                <span className="text-gray-500 text-sm">{comment.time}</span>
              </div>
              <p className="text-gray-700">{comment.content}</p>
              <div className="flex space-x-4 mt-2 text-gray-500">
                <button onClick={() => handleLike(comment.id)} className="flex items-center space-x-1 hover:text-orange-500">
                  <span>👍</span>
                  <span>{comment.likes}</span>
                </button>
                <button onClick={() => handleDislike(comment.id)} className="flex items-center space-x-1 hover:text-orange-500">
                  <span>👎</span>
                  <span>{comment.dislikes}</span>
                </button>
                <button
                  onClick={() => toggleReplyInput(comment.id)}
                  className="flex items-center space-x-1 hover:text-orange-500"
                >
                  <span>Reply</span>
                </button>
              </div>

              {/* Reply Section */}
              {comment.replies.length > 0 && (
                <div className="mt-2 space-y-2 pl-5">
                  {comment.replies.map((reply, index) => (
                    <div key={index} className="text-gray-600">
                      <span className="font-semibold">{reply.user}</span>: {reply.content}
                    </div>
                  ))}
                </div>
              )}

              {/* Reply Input Field */}
              {showReplyInput === comment.id && (
                <div className="mt-2">
                  <input
                    type="text"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Add a reply..."
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleReply(comment.id, replyText);
                      }
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
