import { combineReducers } from "redux";
import booksReducer from "./books/reducer";
import filterReducer from "./filter/reducer";

const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer,
});
export default rootReducer;
