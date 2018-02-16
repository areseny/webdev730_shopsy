import { connect } from "react-redux";
import CategoriesNav from "./categories_nav";
import { getAllCategories } from "../../actions/category_actions";
import { closeCategoriesNav } from "../../actions/ui_actions";

const mapStateToProps = ({ categories, ui }) => ({
  categories: Object.values(categories),
});

const mapDispatchToProps = dispatch => ({
  getAllCategories: () => dispatch(getAllCategories()),
  closeCategoriesNav: () => dispatch(closeCategoriesNav())
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesNav);
