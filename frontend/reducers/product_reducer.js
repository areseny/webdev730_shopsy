import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT,
  REMOVE_PRODUCT
} from "../actions/product_actions";

const ProductReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = { ...oldState };
  const { products, product } = action;
  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      return products;
    case RECEIVE_PRODUCT:
      newState[product.id] = product;
      return newState;
    case REMOVE_PRODUCT:
      delete newState[product.id];
      return newState;
    default:
      return oldState;
  }
};

export default ProductReducer;
