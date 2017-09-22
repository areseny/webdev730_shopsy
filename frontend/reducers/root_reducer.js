import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import ProductReducer from './product_reducer';
import CommentsReducer from './comments_reducer';

export default combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  products: ProductReducer,
  comments: CommentsReducer
});
