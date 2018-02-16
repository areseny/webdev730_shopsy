import Header from "./header";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  openCategoriesNav,
  closeCategoriesNav,
} from "../../actions/ui_actions";

const mapStateToProps = ({ ui }) => ({
  isCategoriesNavHidden: ui.isCategoriesNavHidden
});

const mapDispatchToProps = dispatch => ({
  openCategoriesNav: () => dispatch(openCategoriesNav()),
}); 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
