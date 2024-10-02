import { bookDeleted } from "../actions";

export const deleteBooks = (bookId) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    dispatch(bookDeleted(bookId));
  };
};
