import { combineReducers } from "redux";
import { reducer as productReducer } from "./product/reducer";
import { reducer as cartReducer } from "./cart/reducer";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
