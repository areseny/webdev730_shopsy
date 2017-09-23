import { connect } from 'react-redux';
import CommentForm from './comment_form';
import {
  createComment,
  getComments,
  updateComment,
  deleteComment
 } from '../../actions/comment_actions';

const mapStateToProps = ({ session, comments }, ownProps) => {
  const currentUserId = session.currentUser ? session.currentUser.id : null;
  return ({
    loggedIn: Boolean(session.currentUser),
    comments: Object.values(comments),
    productId: ownProps.productId,
    currentUserId
  });
};

const mapDispatchToProps = state => dispatch => ({
  getComments: (productId) => dispatch(getComments(productId)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (comment) => dispatch(deleteComment(comment)),
  createComment: (comment) => dispatch(createComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
