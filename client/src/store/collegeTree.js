/**
 * Actions types
 */
export const SET_COLLEGE_TREE = "SET_COLLEGE_TREE";
export const CLEAR_COLLEGE_TREE = "CLEAR_COLLEGE_TREE";

/**
 * Initial State
 */
export const collegeTreeInitialState = {
  defaultExpanded: [
    "allColleges" /* deprecated */,
    "614f5a3f2ddf2265db42b297" /* ignou id on bimlee-live-2 local db */,
    "61511b1db11b312f6d972473" /* ignou id on ignou-app-1 atlas */,
  ], // colleges and IGNOU
};

/**
 * CollegeTree Reducer
 */
export const collegeTreeReducer = (state = collegeTreeInitialState, action) => {
  switch (action.type) {
    case SET_COLLEGE_TREE:
      return {
        ...state,
        defaultExpanded: action.payload,
      };
    case CLEAR_COLLEGE_TREE: {
      return {
        ...state,
        ...collegeTreeInitialState,
      };
    }

    default:
      return state;
  }
};
