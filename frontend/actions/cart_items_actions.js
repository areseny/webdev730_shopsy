import * as CartAPIUtil from '../util/cart_items_api_util';

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

const receiveCartItems = cartItems => ({
  type: RECEIVE_CART_ITEMS,
  cartItems
});

const receiveCartItem = cartItem => ({
  type: RECEIVE_CART_ITEM,
  cartItem
});

const removeCartItem = cartItem => ({
  type: REMOVE_CART_ITEM,
  cartItem
});

export const getCartItems = () => dispatch => (
  CartAPIUtil.fetchCartItems()
    .then( cartItems => dispatch(receiveCartItems(cartItems)))
);

export const getCartItem = id => dispatch => (
  CartAPIUtil.fetchCartItem(id)
    .then( cartItem => dispatch(receiveCartItem(cartItem)))
);

export const createCartItem = productId => dispatch => (
  CartAPIUtil.createCartItem(productId)
    .then( cartItem => dispatch(receiveCartItem(cartItem)))
);

export const deleteCartItem = id => dispatch => (
  CartAPIUtil.deleteCartItem(id)
    .then( cartItem => dispatch(removeCartItem(cartItem)))
);
