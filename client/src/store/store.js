import React, { createContext, useContext, useReducer } from "react";
import { degreeInitialState, degreeReducer } from "./degree";
import { disciplineInitialState, disciplineReducer } from "./discipline";
import { termInitialState, termReducer } from "./term";

/**
 * React context for store
 */
const StoreContext = createContext();

/**
 * Combine initial states
 */
const store = {
  // message: messageInitialState,
  // auth: authInitialState,
  // uploading: uploadingInitialState,
  // deleting: deletingInitialState,
  // datatree: datatreeInitialState,
  // status: statusInitialState,
  // route: routeInitialState,
  // collegeTree: collegeTreeInitialState,
  degree: degreeInitialState,
  term: termInitialState,
  discipline: disciplineInitialState,
};

/**
 * Combine reducers
 */
const reducers = (store, action) => ({
  // message: messageReducer(store.message, action),
  // auth: authReducer(store.auth, action),
  // uploading: uploadingReducer(store.uploading, action),
  // deleting: deletingReducer(store.deleting, action),
  // datatree: datatreeReducer(store.datatree, action),
  // status: statusReducer(store.status, action),
  // route: routeReducer(store.route, action),
  // collegeTree: collegeTreeReducer(store.collegeTree, action),
  degree: degreeReducer(store.degree, action),
  term: termReducer(store.term, action),
  discipline: disciplineReducer(store.discipline, action),
});

/**
 * Store context provider
 */
export const StoreProvider = ({ children }) => (
  <StoreContext.Provider value={useReducer(reducers, store)}>{children}</StoreContext.Provider>
);

/**
 * React hook for consuming store
 */
export const useStore = () => useContext(StoreContext);
