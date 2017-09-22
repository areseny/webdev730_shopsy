import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveAllComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const getComments = (productId) => dispatch => (
  CommentAPIUtil.fetchComments(productId)
  .then( comments => dispatch(receiveAllComments(comments)))
);

export const getComment = (id) => dispatch => (
  CommentAPIUtil.fetchComment(id)
  .then( comment => dispatch(receiveComment(comment)))
);

export const createComment = (newComment) => dispatch => (
  CommentAPIUtil.createComment(newComment)
  .then( comment => dispatch(receiveComment(comment)))
);

export const updateComment = (newComment) => dispatch => (
  CommentAPIUtil.updateComment(newComment)
  .then( comment => dispatch(receiveComment(comment)))
);

export const deleteComment = (id) => dispatch => (
  CommentAPIUtil.deleteComment(id)
  .then( comment => dispatch(removeComment(comment)))
);
