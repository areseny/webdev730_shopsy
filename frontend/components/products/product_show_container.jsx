import { connect } from 'react-redux';
import ProductShow from './product_show';
import { withRouter } from 'react-router-dom';
import { getProduct } from '../../actions/product_actions';
import { createCartItem } from '../../actions/cart_items_actions';

const mapStateToProps = (state, ownProps) => {
   return { product: state.products[ownProps.match.params.productId]};
};

const mapDispatchToProps = state => dispatch => ({
  getProduct: (id) => dispatch(getProduct(id)),
  createCartItem: (productId) => dispatch(createCartItem(productId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductShow));
