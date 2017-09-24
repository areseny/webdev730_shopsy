import { connect } from 'react-redux';
import CartItemsIndex from './cart_items_index';
import { getAllProducts } from '../../actions/product_actions';
import { getCartItems } from '../../actions/cart_items_actions';

const mapStateToProps = ({ cartItems }) => ({
  cartProducts: Object.values(cartItems)
});

const mapDispatchToProps = state => dispatch => ({
  getCartItems: () => dispatch(getCartItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItemsIndex);
