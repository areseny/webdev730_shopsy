import { connect } from "react-redux";
import Banner from "./banner";
import { getAllCategories } from "../../actions/category_actions";

const mapStateToProps = state => ({
  allProducts: Object.values(state.categories).filter(
    cat => cat.name === "All Products"
  )[0]
});

export default connect(mapStateToProps, null)(Banner);
