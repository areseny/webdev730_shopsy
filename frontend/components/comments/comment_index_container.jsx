import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import {
  getComments,
  updateComment,
  deleteComment
 } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => ({
  comments: Object.values(state.comments),
  productId: ownProps.productId
});

const mapDispatchToProps = state => dispatch => ({
  getComments: (productId) => dispatch(getComments(productId)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (comment) => dispatch(deleteComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
