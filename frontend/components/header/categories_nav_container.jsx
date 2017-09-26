import { connect } from "react/redux";
import CategoriesNav from "./categories_nav";
import getAllCategories from "../../actions/categories_actions";

const mapStateToProps = state => ({
  categories: Object.values(state.categories)
});

const mapDispatchToProps = state => dispatch => ({
  getAllCategories: () => dispatch(getAllCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesNav);
