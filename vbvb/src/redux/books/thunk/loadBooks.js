import { booksLoaded } from "../actions";

export const loadBooks = async (dispatch) => {
  const res = await fetch(`http://localhost:9000/books`);
  const books = await res.json();
  dispatch(booksLoaded(books));
};
