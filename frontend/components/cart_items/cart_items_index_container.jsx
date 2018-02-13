import { connect } from "react-redux";
import CartItemsIndex from "./cart_items_index";
import { getCartItems, deleteCartItem } from "../../actions/cart_items_actions";

const mapStateToProps = ({ cartItems, session }) => {
  const cartProducts = Object.values(cartItems);
  const cartTotal = cartProducts
    .map(product => product.price)
    .reduce((a, b) => a + b, 0);
  return {
    cartProducts,
    cartTotal,
    loggedIn: Boolean(session.currentUser)
  };
};

const mapDispatchToProps = dispatch => ({
  getCartItems: () => dispatch(getCartItems()),
  deleteCartItem: id => dispatch(deleteCartItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItemsIndex);
