import { connect } from "react-redux";
import ProductIndex from "./product_index";
import {
  getAllProducts,
  getSearchProducts,
  getFeaturedProducts,
  getProductsByCategory
} from "../../actions/product_actions";

const mapStateToProps = state => ({
  products: Object.values(state.products)
});

const mapDispatchToProps = () => dispatch => ({
  getSearchProducts: searchTerm => dispatch(getSearchProducts(searchTerm)),
  getFeaturedProducts: () => dispatch(getFeaturedProducts()),
  getProductsByCategory: categoryId => dispatch(getProductsByCategory(categoryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);
