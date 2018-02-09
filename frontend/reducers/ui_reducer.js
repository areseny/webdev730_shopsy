import { RECEIVE_VISIBILITY_CHANGE } from "../actions/ui_actions";

const defaultState = { isHidden: true };

const UIReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_VISIBILITY_CHANGE:
      return { isHidden: action.isHidden };
    default:
      return oldState;
  }
};

export default UIReducer;
