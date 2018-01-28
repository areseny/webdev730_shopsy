import { connect } from "react-redux";
import CategoriesNav from "./categories_nav";
import { getAllCategories } from "../../actions/category_actions";

const mapStateToProps = state => ({
  categories: Object.values(state.categories)
});

const mapDispatchToProps = dispatch => ({
  getAllCategories: () => dispatch(getAllCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesNav);
