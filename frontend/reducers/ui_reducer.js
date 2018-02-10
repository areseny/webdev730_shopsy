import {
  OPEN_CATEGORIES_NAV,
  CLOSE_CATEGORIES_NAV,
} from "../actions/ui_actions";

const defaultState = { isCategoriesNavHidden: true };

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
    default:
      return oldState;
  }
};

export default UIReducer;
