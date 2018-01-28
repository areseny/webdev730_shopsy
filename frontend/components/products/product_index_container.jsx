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

const mapStateToProps = state => ({
  products: Object.values(state.products)
});

const mapDispatchToProps = () => dispatch => ({
  getSearchProducts: searchTerm => dispatch(getSearchProducts(searchTerm)),
  getFeaturedProducts: () => dispatch(getFeaturedProducts()),
  getProductsByCategory: categoryId =>
    dispatch(getProductsByCategory(categoryId)),
  getProductsByUser: userId => dispatch(getProductsByUser(userId)),
  deleteProduct: (userId, productId) =>
    dispatch(deleteProduct(userId, productId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductIndex)
);
