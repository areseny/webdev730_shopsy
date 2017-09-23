import React from 'react';

const CommentIndexItem = ({ comment, deleteComment, updateComment }) => (
  <div>
    <div className="comment-btns">
      <button>Delete</button>
    </div>
    <textarea value={comment.body} />
  </div>
);

export default CommentIndexItem;
