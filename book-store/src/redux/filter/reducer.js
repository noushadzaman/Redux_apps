import initialState from "./initialState";
import { FILTER, SEARCH } from "./actionTypes";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH: {
      return {
        ...state,
        search: action.payload,
      };
    }

    case FILTER: {
      return {
        ...state,
        filter: action.payload,
      };
    }

    default:
      return state;
  }
};

export default filterReducer;
