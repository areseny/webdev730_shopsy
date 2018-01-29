import {
  RECEIVE_COMMENT,
  RECEIVE_ALL_COMMENTS,
  REMOVE_COMMENT
} from '../actions/comment_actions';

const CommentReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = { ...oldState };
  const { comment, comments } = action;
  switch(action.type) {
    case RECEIVE_ALL_COMMENTS:
      return comments;
    case RECEIVE_COMMENT:
      newState[comment.id] = comment;
      return newState;
    case REMOVE_COMMENT:
      delete newState[comment.id];
      return newState;
    default:
      return oldState;
  }
};

export default CommentReducer;
