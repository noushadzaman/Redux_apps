import { ADD, DELETE, EDIT, LOAD } from "./actionTypes";
import initialState from "./initialState";

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return action.payload;

    case ADD:
      return [...state, action.payload];

    case DELETE:
      return state.filter((book) => book.id !== action.payload);

    case EDIT: {
      const newState = state.map((book) => {
        if (book.id === action.payload.bookId) {
          return {
            ...action.payload.book,
          };
        }
        return book;
      });

      return newState;
    }

    default:
      return state;
  }
};

export default booksReducer;
