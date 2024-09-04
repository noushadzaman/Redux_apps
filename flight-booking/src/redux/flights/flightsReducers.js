import { ADD, DELETE } from "./actionTypes";

const initialState = {
  flights: [],
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        flights: [...state.flights, action.payload],
      };

    case DELETE: {
      const newState = state.flights.filter((s) => s.id !== action.payload);
      return {
        flights: newState,
      };
    }

    default:
      return state;
  }
};

export default flightReducer;
