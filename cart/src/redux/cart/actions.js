import { ADDTOCART } from "./actionTypes";

export const add = (product) => {
  return {
    type: ADDTOCART,
    payload: product,
  };
};
