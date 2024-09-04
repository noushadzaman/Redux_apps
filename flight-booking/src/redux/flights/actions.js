import { ADD, DELETE } from "./actionTypes";

export const addFlight = (value) => {
  return {
    type: ADD,
    payload: value,
  };
};

export const deleteFlight = (value) => {
  return {
    type: DELETE,
    payload: value,
  };
};