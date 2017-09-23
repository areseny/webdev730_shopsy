import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import {
  getComments,
  updateComment,
  deleteComment
 } from '../../actions/comment_actions';

const mapStateToProps = ({ session, comments }, ownProps) => {
  const currentUserId = session.currentUser ? session.currentUser.id : null;
  return ({
    comments: Object.values(comments),
    productId: ownProps.productId,
    currentUserId
  });
};

const mapDispatchToProps = state => dispatch => ({
  getComments: (productId) => dispatch(getComments(productId)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (comment) => dispatch(deleteComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
