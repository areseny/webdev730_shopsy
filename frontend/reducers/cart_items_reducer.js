import {
  RECEIVE_CART_ITEMS,
  RECEIVE_CART_ITEM,
  REMOVE_CART_ITEM
} from '../actions/cart_items_actions';

const CartItemsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = { ...oldState };
  const { cartItem, cartItems } = action;
  switch(action.type) {
    case RECEIVE_CART_ITEMS:
      return cartItems;
    case RECEIVE_CART_ITEM:
      newState[cartItem.id] = cartItem;
      return newState;
    case REMOVE_CART_ITEM:
      delete newState[cartItem.id];
      return newState;
    default:
      return oldState;
  }
};

export default CartItemsReducer;
