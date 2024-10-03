import { FILTER, SEARCH } from "./actionTypes";

export const searchBook = (input) => {
  return {
    type: SEARCH,
    payload: input,
  };
};

export const filterBook = (input) => {
  return {
    type: FILTER,
    payload: input,
  };
};
