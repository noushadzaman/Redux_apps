import { ADD, DELETE, LOAD } from "./actionTypes";

export const booksLoaded = (books) => {
  return {
    type: LOAD,
    payload: books,
  };
};

export const bookAdded = (book) => {
  return {
    type: ADD,
    payload: book,
  };
};

export const bookDeleted = (bookId) => {
  return {
    type: DELETE,
    payload: bookId,
  };
};

export const bookEdited = (bookId, book) => {
  return {
    type: LOAD,
    payload: {
      bookId,
      book,
    },
  };
};
