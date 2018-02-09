import Header from "./header";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { receiveVisibiltyChange } from "../../actions/ui_actions";

const mapStateToProps = ({ ui }) => ({
  isHidden: ui.isHidden
});

const mapDispatchToProps = dispatch => ({
  action: isHidden => dispatch(receiveVisibiltyChange(isHidden))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
