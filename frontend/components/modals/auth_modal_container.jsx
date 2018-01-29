import { connect } from "react-redux";
import AuthModal from "./auth_modal";

const mapStateToProps = (state, { match }) => {
  const formType = match.path === "/login" ? "Login" : "Signup";
  return { formType };
};

export default connect(mapStateToProps, null)(AuthModal);
