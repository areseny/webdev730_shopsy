import merge from 'lodash/merge';
import { RECEIVE_USER } from '../actions/user_actions';

const UserReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);
  switch(action.type) {
    case RECEIVE_USER:
      newState[action.product.id] = action.product;
      return newState;
    default: 
      return oldState;
  }
};

export default UserReducer;