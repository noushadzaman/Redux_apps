import { ADDPRODUCT, REDUCEQUANTITY } from "./actionTypes";
import { initialState } from "./initialState";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return { products: [...state.products, action.payload] };
    case REDUCEQUANTITY: {
      const newState = state.products.map((p) => {
        if (p.id === action.payload.id) {
          return {
            ...p,
            quantity: p.quantity - 1,
          };
        }
        return p;
      });
      return { products: newState };
    }

    default:
      return state;
  }
};
