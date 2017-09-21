import { connect } from 'react-redux';
import ProductShow from './product_show';
import { withRouter } from 'react-router-dom';
import { getProduct } from '../../actions/product_actions';

const mapStateToProps = (state, { match }) => ({
  product: state.products[match.params.productId]
});

const mapDispatchToProps = state => dispatch => ({
  getProduct: (id) => dispatch(getProduct(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductShow));
