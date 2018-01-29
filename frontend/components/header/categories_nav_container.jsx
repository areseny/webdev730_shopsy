import { connect } from "react-redux";
import CategoriesNav from "./categories_nav";
import { getAllCategories } from "../../actions/category_actions";

const mapStateToProps = ({ categories }) => ({
  categories: Object.values(categories)
});

const mapDispatchToProps = dispatch => ({
  getAllCategories: () => dispatch(getAllCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesNav);
