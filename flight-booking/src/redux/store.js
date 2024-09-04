import { applyMiddleware, createStore } from "redux";
import flightReducer from "./flights/flightsReducers";
import { DELETE } from "./flights/actionTypes";

const bookLimit = (store) => (next) => (action) => {
  if (store.getState().flights.length <= 2) {
    return next(action);
  }
  if (action.type === DELETE) {
    return next(action);
  }
};

const store = createStore(flightReducer, applyMiddleware(bookLimit));

export default store;
