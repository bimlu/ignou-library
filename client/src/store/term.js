// Actions types
export const SET_TERM = "SET_TERM";
export const CLEAR_TERM = "CLEAR_TERM";

// Initial State
export const termInitialState = 0;

// Degree Reducer
export const termReducer = (state = termInitialState, action) => {
  switch (action.type) {
    case SET_TERM:
      return action.payload;
    case CLEAR_TERM: {
      return termInitialState;
    }

    default:
      return state;
  }
};
