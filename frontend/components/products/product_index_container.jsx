import { connect } from "react-redux";
import ProductIndex from "./product_index";
import {
  getAllProducts,
  getSearchProducts,
  getFeaturedProducts
} from "../../actions/product_actions";

const mapStateToProps = state => ({
  products: Object.values(state.products)
});

const mapDispatchToProps = () => dispatch => ({
  getAllProducts: () => dispatch(getAllProducts()),
  getSearchProducts: searchTerm => dispatch(getSearchProducts(searchTerm)),
  getFeaturedProducts: () => dispatch(getFeaturedProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);
