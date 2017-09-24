import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import CartErrorsReducer from './cart_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  cart: CartErrorsReducer
});
