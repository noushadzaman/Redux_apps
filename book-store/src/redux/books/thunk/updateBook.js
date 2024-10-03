import { bookEdited } from "../actions";

export const updateBook = (bookId, book) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "PATCH",
      body: JSON.stringify({
        ...book,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    dispatch(bookEdited(bookId, book));
  };
};
