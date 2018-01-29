import React from "react";
import CommentIndexItem from "./comment_index_item";

export default class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    const { getComments, productId } = this.props;
    if (productId !== nextProps.productId) {
      getComments(nextProps.productId);
    }
  }

  componentDidMount() {
    const { getComments, productId } = this.props;
    getComments(productId);
  }

  render() {
    const {
      comments,
      productId,
      deleteComment,
      updateComment,
      currentUserId
    } = this.props;
    const commentList = comments
      .reverse()
      .map(comment => (
        <CommentIndexItem
          key={comment.id}
          comment={comment}
          productId={productId}
          deleteComment={deleteComment}
          updateComment={updateComment}
          currentUserId={currentUserId}
        />
      ));
    return <div className="comments-list">{commentList}</div>;
  }
}
