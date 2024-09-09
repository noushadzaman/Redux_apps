import { ADDPRODUCT, REDUCEQUANTITY } from "./actionTypes";

export const add = (product) => {
  return {
    type: ADDPRODUCT,
    payload: product,
  };
};

export const reduceQuantity = (product) => {
  return {
    type: REDUCEQUANTITY,
    payload: product,
  };
};
