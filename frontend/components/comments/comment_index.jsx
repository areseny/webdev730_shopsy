import React from 'react';
import CommentIndexItem from './comment_index_item';

export default class CommentIndex extends React.Component {
  componentDidMount() {
    this.props.getComments(this.props.productId);
  }

  render() {
    const comments = this.props.comments.reverse().map( comment =>
      <CommentIndexItem
        key={comment.id}
        comment={comment}
        deleteComment={this.props.deleteComment}
        currentUserId={this.props.currentUserId}
         />);
    return (
      <div className="comments-list">
        Comments
        {comments}
      </div>
    );
  }
}
