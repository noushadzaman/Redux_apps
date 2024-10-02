import { bookAdded } from "../actions";

export const addBooks = (book) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/books`, {
      method: "POST",
      body: JSON.stringify({
        ...book,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    const newBook = await res.json();
    dispatch(bookAdded(newBook));
  };
};
