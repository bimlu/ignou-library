// Actions types
export const SET_DEGREE = "SET_DEGREE";
export const CLEAR_DEGREE = "CLEAR_DEGREE";

// Initial State
export const degreeInitialState = "";

// Degree Reducer
export const degreeReducer = (state = degreeInitialState, action) => {
  switch (action.type) {
    case SET_DEGREE:
      return action.payload;
    case CLEAR_DEGREE: {
      return degreeInitialState;
    }

    default:
      return state;
  }
};
