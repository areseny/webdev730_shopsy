import { connect } from "react-redux";
import Banner from "./banner";
import { getAllCategories } from "../../actions/category_actions";

const mapStateToProps = state => ({
  categories: Object.values(state.categories)
});

const mapDispatchToProps = state => dispatch => ({
  getAllCategories: () => dispatch(getAllCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
