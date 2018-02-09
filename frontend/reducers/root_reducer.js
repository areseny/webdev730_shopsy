import { combineReducers } from "redux";
import SessionReducer from "./session_reducer";
import ErrorsReducer from "./errors_reducer";
import ProductReducer from "./product_reducer";
import CommentsReducer from "./comments_reducer";
import CartItemsReducer from "./cart_items_reducer";
import CategoriesReducer from "./categories_reducer";
import UserReducer from "./user_reducer";
import UIReducer from './ui_reducer';

export default combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  products: ProductReducer,
  comments: CommentsReducer,
  cartItems: CartItemsReducer,
  categories: CategoriesReducer,
  users: UserReducer,
  ui: UIReducer,
});
