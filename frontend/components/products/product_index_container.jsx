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
import { openProductForm, closeProductForm } from "../../actions/ui_actions";
const queryString = require("query-string");

const getActionAndArg = ownProps => {
  let action, arg;
  const { location, match, sellerId } = ownProps;
  if (location.search) {
    action = getSearchProducts;
    let parsed = queryString.parse(location.search);
    arg = parsed.search;
  } else if (location.pathname === "/") {
    action = getFeaturedProducts;
    arg = null;
  } else if (match.params.userId) {
    action = getProductsByUser;
    arg = match.params.userId;
  } else if (sellerId) {
    action = getProductsByUser;
    arg = sellerId;
  } else if (match.path === "/categories/:categoryId") {
    action = getProductsByCategory;
    arg = match.params.categoryId;
  }
  return { arg, action };
};

const mapStateToProps = ({ products }, ownProps) => {
  const { arg } = getActionAndArg(ownProps);
  return {
    arg,
    products: Object.values(products)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { action } = getActionAndArg(ownProps);
  return {
    action: arg => dispatch(action(arg)),
    deleteProduct: (userId, productId) =>
      dispatch(deleteProduct(userId, productId)),
    openProductForm: () => dispatch(openProductForm()),
    closeProductForm: () => dispatch(closeProductForm())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductIndex)
);
