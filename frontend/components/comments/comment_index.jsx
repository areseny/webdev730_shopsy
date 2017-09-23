import React from 'react';
import CommentIndexItem from './comment_index_item';

export default class CommentIndex extends React.Component {
  componentDidMount() {
    this.props.getComments(this.props.productId);
  }

  render() {
    return (
      <div>
        {this.props.comments.map( comment =>
        <CommentIndexItem
        key={comment.id}
        updateComment={this.props.updateComment}
        deleteComment={this.props.deleteComment}
        comment={comment} />
        )}
      </div>
    );
  }
}
