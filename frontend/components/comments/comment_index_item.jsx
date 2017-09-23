import React from 'react';

const CommentIndexItem = (props) => {
    return(
      <textarea value={props.comment.body} />
    );
};

export default CommentIndexItem;
