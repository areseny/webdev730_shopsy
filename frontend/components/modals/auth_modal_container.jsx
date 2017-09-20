import { connect } from 'react-redux';
import AuthModal from './auth_modal';

const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.match.path === '/login-modal' ? "Login" : "Signup";
  return { formType };
};


export default connect(
  mapStateToProps,
  null
)(AuthModal);
