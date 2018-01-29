import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT,
  REMOVE_PRODUCT
} from '../actions/product_actions';

const ProductReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = { ...oldState };
  switch(action.type) {
    case RECEIVE_ALL_PRODUCTS:
      return action.products;
    case RECEIVE_PRODUCT:
      newState[action.product.id] = action.product;
      return newState;
    case REMOVE_PRODUCT:
      delete newState[action.product.id];
      return newState;
    default:
      return oldState;
  }
};

export default ProductReducer;
