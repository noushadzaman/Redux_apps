import { combineReducers } from "redux";
import filterReducer from "./filter/reducer";
import todoReducer from "./todos/reducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});

export default rootReducer;