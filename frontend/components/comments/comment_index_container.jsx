import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { getComments } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => ({
  comments: Object.values(state.comments),
  productId: ownProps.productId
});

const mapDispatchToProps = state => dispatch => ({
  getComments: (productId) => dispatch(getComments(productId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
