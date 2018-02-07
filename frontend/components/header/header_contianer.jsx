import Header from "./header";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { receiveVisibiltyChange } from "../../actions/component_visibility_actions";

const mapStateToProps = ({ componentVisibility }) => ({
  isHidden: componentVisibility.isHidden
});

const mapDispatchToProps = dispatch => ({
  action: isHidden => dispatch(receiveVisibiltyChange(isHidden))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
