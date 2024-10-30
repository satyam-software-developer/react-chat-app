// Importing necessary functions and middleware from Redux and Redux middleware
import { applyMiddleware, createStore } from "redux"; // Importing applyMiddleware and createStore from Redux
import logger from "redux-logger"; // Importing the logger middleware for logging actions
import { thunk } from "redux-thunk"; // Named import for thunk middleware to handle asynchronous actions
import rootreducer from "../reducers"; // Importing the root reducer, which combines all the reducers

// Declaring a variable to hold the store
let store;

// Function to configure and create the Redux store
export function configureStore() {
  // Creating the Redux store with the root reducer and applying middleware
  store = createStore(rootreducer, applyMiddleware(thunk, logger));
  // Returning the configured store
  return store;
}
