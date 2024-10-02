import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
// import { composeWithDevTools } from "@redux-devtools/extension";

const asyncMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch);
  }

  return next(action);
};

const store = createStore(rootReducer, applyMiddleware(asyncMiddleware));

export default store;
