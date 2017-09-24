import { connect } from 'react-redux';
import CartItemsIndex from './cart_items_index';
import { getCartItems, deleteCartItem } from '../../actions/cart_items_actions';

const mapStateToProps = ({ cartItems }) => ({
  cartProducts: Object.values(cartItems)
});

const mapDispatchToProps = state => dispatch => ({
  getCartItems: () => dispatch(getCartItems()),
  deleteCartItem: id => dispatch(deleteCartItem(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItemsIndex);
