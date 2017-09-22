import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
  action: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
  formType: "signup"
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
