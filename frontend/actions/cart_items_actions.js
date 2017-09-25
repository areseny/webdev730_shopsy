import * as CartAPIUtil from '../util/cart_items_api_util';

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const RECEIVE_CART_ERRORS = 'RECEIVE_CART_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

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

const receiveCartErrors = (errors) => ({
  type: RECEIVE_CART_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const getCartItems = () => dispatch => (
  CartAPIUtil.fetchCartItems()
    .then( cartItems => dispatch(receiveCartItems(cartItems)))
);

export const getCartItem = id => dispatch => (
  CartAPIUtil.fetchCartItem(id)
    .then( cartItem => dispatch(receiveCartItem(cartItem)),
  err => dispatch(receiveCartErrors(err.responseJSON)))
);

export const createCartItem = productId => dispatch => (
  CartAPIUtil.createCartItem(productId)
    .then( cartItem => dispatch(receiveCartItem(cartItem)),
  err => dispatch(receiveCartErrors(err.responseJSON)))
);

export const deleteCartItem = id => dispatch => (
  CartAPIUtil.deleteCartItem(id)
    .then( cartItem => dispatch(removeCartItem(cartItem)))
);
