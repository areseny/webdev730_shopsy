export const RECEIVE_VISIBILITY_CHANGE = "RECEIVE_VISIBILITY_CHANGE";

export const receiveVisibiltyChange = isHidden => ({
  type: RECEIVE_VISIBILITY_CHANGE,
  isHidden
});
 