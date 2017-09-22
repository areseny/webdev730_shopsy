import merge from 'lodash/merge';

import {
  RECEIVE_COMMENT,
  RECEIVE_ALL_COMMENTS,
  REMOVE_COMMENT
} from '../actions/comment_actions';

const CommentReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);
  switch(action.type) {
    case RECEIVE_ALL_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      newState[action.comment.id] = action.comment;
      return newState;
    case REMOVE_COMMENT:
      delete newState[action.comment.id];
      return newState;
    default:
      return oldState;
  }
};

export default CommentReducer;
