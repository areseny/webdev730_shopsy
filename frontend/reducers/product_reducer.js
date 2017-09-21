import merge from 'lodash/merge';

import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT
} from '../actions/product_actions';

const ProductReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_PRODUCTS:
      return action.products;
    case RECEIVE_PRODUCT:
      const newState = merge({}, oldState);
      newState[action.product.id] = action.product;
      return newState;
    default:
      return oldState;
  }
};

export default ProductReducer;
