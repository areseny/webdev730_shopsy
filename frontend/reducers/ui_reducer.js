import {
  OPEN_CATEGORIES_NAV,
  CLOSE_CATEGORIES_NAV,
  OPEN_PRODUCT_FORM,
  CLOSE_PRODUCT_FORM
} from "../actions/ui_actions";

const defaultState = { isCategoriesNavHidden: true, isProductFormHidden: true };

const UIReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  const newState = { ...oldState };
  switch (action.type) {
    case OPEN_CATEGORIES_NAV:
      newState.isCategoriesNavHidden = false;
      return newState;
    case CLOSE_CATEGORIES_NAV: 
      newState.isCategoriesNavHidden = true;
      return newState;
    case OPEN_PRODUCT_FORM: 
      newState.isProductFormHidden = false;
      return newState;
    case CLOSE_PRODUCT_FORM:
      newState.isProductFormHidden = true;
      return newState;
    default:
      return oldState;
  }
};

export default UIReducer;
