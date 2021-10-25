// Actions types
export const SET_DISCIPLINE = "SET_DISCIPLINE";
export const CLEAR_DISCIPLINE = "CLEAR_DISCIPLINE";

// Initial State
export const disciplineInitialState = "";

// Discipline Reducer
export const disciplineReducer = (state = disciplineInitialState, action) => {
  switch (action.type) {
    case SET_DISCIPLINE:
      return action.payload;
    case CLEAR_DISCIPLINE: {
      return disciplineInitialState;
    }

    default:
      return state;
  }
};
