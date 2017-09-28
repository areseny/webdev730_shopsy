import { connect } from "react-redux";
import ProductShow from "./product_show";
import { withRouter } from "react-router-dom";
import { getProduct } from "../../actions/product_actions";
import { createCartItem, clearErrors } from "../../actions/cart_items_actions";

const mapStateToProps = (state, ownProps) => ({
  product: state.products[ownProps.match.params.productId],
  errors: state.errors.cart,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = state => dispatch => ({
  getProduct: id => dispatch(getProduct(id)),
  createCartItem: productId => dispatch(createCartItem(productId)),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductShow)
);
