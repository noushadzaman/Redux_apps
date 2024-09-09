import { ADDTOCART } from "./actionTypes";
import { initialState } from "./initialState";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART: {
      const exist = state.cart.find((item) => item.id === action.payload.id);
      if (exist) {
        const newItems = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        return {
          cart: newItems,
        };
      } else {
        return {
          cart: [...state.cart, action.payload],
        };
      }
    }
    default:
      return state;
  }
};
