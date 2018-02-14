import { connect } from "react-redux";
import Banner from "./banner";

const mapStateToProps = state => ({
  allProducts: Object.values(state.categories).filter(
    cat => cat.name === "All Products"
  )[0]
});

export default connect(mapStateToProps, null)(Banner);
