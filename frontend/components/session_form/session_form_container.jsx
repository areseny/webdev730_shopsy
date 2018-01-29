import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup, login, clearErrors } from "../../actions/session_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = ({ session, errors }, { location }) => {
  const formType = location.pathname === "/login" ? "login" : "signup";
  return {
    loggedIn: Boolean(session.currentUser),
    errors: errors.session,
    formType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SessionForm)
);
