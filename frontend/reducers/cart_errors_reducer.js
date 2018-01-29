import {
  RECEIVE_CART_ERRORS,
  RECEIVE_CART_ITEM,
  CLEAR_ERRORS
} from '../actions/cart_items_actions';

const CartErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CART_ITEM:
      return [];
    case RECEIVE_CART_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default CartErrorsReducer;
