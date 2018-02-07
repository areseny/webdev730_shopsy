import { connect } from "react-redux";
import CategoriesNav from "./categories_nav";
import { getAllCategories } from "../../actions/category_actions";
import { receiveVisibiltyChange } from "../../actions/component_visibility_actions";

const mapStateToProps = ({ categories, componentVisibility }) => ({
  categories: Object.values(categories),
  componentVisibility: componentVisibility.isHidden
});

const mapDispatchToProps = dispatch => ({
  getAllCategories: () => dispatch(getAllCategories()),
  receiveVisibiltyChange: isHidden => dispatch(receiveVisibiltyChange(isHidden))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesNav);
