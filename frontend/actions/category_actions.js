import { fetchAllCategories } from "../util/category_api_util";

export const RECEIVE_ALL_CATEGORIES = "RECEIVE_ALL_CATEGORIES";

const receiveAllCategories = categories => ({
  type: RECEIVE_ALL_CATEGORIES,
  categories
});

export const getAllCategories = () => dispatch =>
  fetchAllCategories().then(categories =>
    dispatch(receiveAllCategories(categories))
  );
