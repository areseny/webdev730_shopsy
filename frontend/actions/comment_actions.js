import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveAllComments = comments => ({
  action: RECEIVE_ALL_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  action: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  action: REMOVE_COMMENT,
  comment
});

export const getComments = (productId) => (
  CommentAPIUtil.fetchComments(productId)
  .then( comments => receiveAllComments(comments))
);

export const getComment = (id) => (
  CommentAPIUtil.fetchComment(id)
  .then( comment => receiveComment(comment))
);

export const createComment = (newComment) => (
  CommentAPIUtil.createComment(newComment)
  .then( comment => receiveComment(comment))
);

export const updateComment = (newComment) => (
  CommentAPIUtil.updateComment(newComment)
  .then( comment => receiveComment(comment))
);

export const deleteComment = (id) => (
  CommentAPIUtil.deleteComment(id)
  .then( comment => removeComment(comment))
);
