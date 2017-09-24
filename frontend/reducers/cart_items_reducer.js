import merge from 'lodash/merge';

import {
  RECEIVE_CART_ITEMS,
  RECEIVE_CART_ITEM,
  REMOVE_CART_ITEM
} from '../actions/cart_items_actions';

const CartItemsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_CART_ITEMS:
      return action.cartItems;
    case RECEIVE_CART_ITEM:
      newState[action.cartItem.id] = action.cartItem;
      return newState;
    case REMOVE_CART_ITEM:
      delete newState[action.cartItem.id];
      return newState;
    default:
      return oldState;
  }
};

export default CartItemsReducer;
