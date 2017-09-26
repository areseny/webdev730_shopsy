import React from "react";
import CommentIndexItem from "./comment_index_item";

export default class CommentIndex extends React.Component {
  componentDidMount() {
    this.props.getComments(this.props.productId);
  }

  render() {
    const comments = this.props.comments
      .reverse()
      .map(comment => (
        <CommentIndexItem
          key={comment.id}
          comment={comment}
          productId={this.props.productId}
          deleteComment={this.props.deleteComment}
          updateComment={this.props.updateComment}
          currentUserId={this.props.currentUserId}
        />
      ));
    return <div className="comments-list">{comments}</div>;
  }
}
