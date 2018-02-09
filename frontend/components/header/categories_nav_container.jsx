import { connect } from "react-redux";
import CategoriesNav from "./categories_nav";
import { getAllCategories } from "../../actions/category_actions";
import { receiveVisibiltyChange } from "../../actions/ui_actions";

const mapStateToProps = ({ categories, ui }) => ({
  categories: Object.values(categories),
  ui: ui.isHidden
});

const mapDispatchToProps = dispatch => ({
  getAllCategories: () => dispatch(getAllCategories()),
  receiveVisibiltyChange: isHidden => dispatch(receiveVisibiltyChange(isHidden))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesNav);
