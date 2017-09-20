import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: Object.values(state.errors),
});

const mapDispatchToProps = dispatch => ({
  action: (user) => dispatch(login(user)),
  formType: "login"
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
