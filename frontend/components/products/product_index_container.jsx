import { connect } from "react-redux";
import ProductIndex from "./product_index";
import { withRouter } from "react-router-dom";
import {
  getAllProducts,
  getSearchProducts,
  getFeaturedProducts,
  getProductsByCategory,
  getProductsByUser,
  deleteProduct
} from "../../actions/product_actions";
const queryString = require("query-string");

const getActionAndArg = (ownProps) => {
  let action, arg, type;
  if (ownProps.location.search) {
    action = getSearchProducts;
    let parsed = queryString.parse(ownProps.location.search);
    arg = parsed.search;
  } else if (ownProps.location.pathname === '/') {
    action = getFeaturedProducts;
    arg = null;
  } else if (ownProps.match.path === '/users/:userId') {
    action = getProductsByUser;
    arg = ownProps.match.params.userId;
  } else if (ownProps.sellerId) {
    action = getProductsByUser;
    arg = ownProps.sellerId;
  } else if (ownProps.match.path === '/categories/:categoryId') {
    action = getProductsByCategory;
    arg = ownProps.match.params.categoryId;
  }
  return { arg, action };
}; 

const mapStateToProps = (state, ownProps) => {
  const { arg } = getActionAndArg(ownProps);
  return {
    products: Object.values(state.products),
    arg
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { action } = getActionAndArg(ownProps);
  return {
    action: a => dispatch(action(a)),
    deleteProduct: (userId, productId) =>
      dispatch(deleteProduct(userId, productId))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductIndex)
);
