import { RECEIVE_ALL_CATEGORIES } from "../actions/category_actions";

const CategoriesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_CATEGORIES:
      return action.categories;
    default:
      return oldState;
  }
};

export default CategoriesReducer;
