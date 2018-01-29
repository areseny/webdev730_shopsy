import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import {
  getComments,
  updateComment,
  deleteComment
 } from '../../actions/comment_actions';

const mapStateToProps = ({ session, comments }, { productId }) => {
  const currentUserId = session.currentUser ? session.currentUser.id : null;
  return ({
    productId,
    currentUserId,
    comments: Object.values(comments),
  });
};

const mapDispatchToProps = dispatch => ({
  getComments: (productId) => dispatch(getComments(productId)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (comment) => dispatch(deleteComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
