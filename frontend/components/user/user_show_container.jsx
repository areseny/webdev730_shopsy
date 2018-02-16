import { connect } from "react-redux";
import UserShow from "./user_show";
import { getUser } from "../../actions/user_actions";
import { openProductForm, closeProductForm } from "../../actions/ui_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = ({ users, session, ui }, { match }) => ({
  user: users[match.params.userId],
  currentUser: session.currentUser,
  isProductFormHidden: ui.isProductFormHidden,
});

const mapDispatchToProps = dispatch => ({
  getUser: id => dispatch(getUser(id)),
  openProductForm: () => dispatch(openProductForm()),
  closeProductForm: () => dispatch(closeProductForm()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserShow)
);
