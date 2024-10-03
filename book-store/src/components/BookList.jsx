import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBooks } from "../redux/books/thunk/loadBooks";
import BookCard from "./BookCard";
import { filterBook } from "../redux/filter/actions";

const BookList = ({ setEditingBook }) => {
    const books = useSelector((state) => state.books);
    const [bookState, setBookState] = useState([]);
    const dispatch = useDispatch()
    const filter = useSelector((state) => state.filter);

    useEffect(() => {
        dispatch(loadBooks);
    }, []);

    useEffect(() => {
        let sorted;
        if (filter.filter === 'featured') {
            sorted = books.filter(book => book.featured)
        }
        else {
            sorted = books;
        }
        setBookState(sorted.filter(book => book.name.toLowerCase().includes(filter.search)));
    }, [books, filter])

    return (
        <div className="order-2 xl:-order-1">
            <div className="flex items-center justify-between mb-12">
                <h4 className="mt-2 text-xl font-bold">Book List</h4>

                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => dispatch(filterBook('all'))}
                        className={`filter-btn ${filter.filter === 'all' ? 'active-filter' : ''} `} id="lws-filterAll">All</button>
                    <button
                        onClick={() => dispatch(filterBook('featured'))}
                        className={`filter-btn ${filter.filter === 'featured' ? 'active-filter' : ''} `} id="lws-filterFeatured">Featured</button>
                </div>
            </div>
            <div className="lws-bookContainer">
                {
                    bookState.map((book, idx) =>
                        <BookCard
                            key={idx}
                            book={book}
                            setEditingBook={setEditingBook}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default BookList;