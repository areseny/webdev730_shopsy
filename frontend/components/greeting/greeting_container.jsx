import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import { getCartItems } from '../../actions/cart_items_actions';
import Greeting from './greeting';

const mapStateToProps = ({cartItems, session}) => ({
  cartCount: Object.keys(cartItems).length,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getCartItems: () => dispatch(getCartItems()),
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
