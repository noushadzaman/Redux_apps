import { useDispatch } from "react-redux";
import { addBooks } from "../redux/books/thunk/addBook";

const AddBookForm = () => {
    const dispatch = useDispatch()

    function onSubmit(e) {
        e.preventDefault();
        const name = e.target.name.value;
        const author = e.target.author.value;
        const thumbnail = e.target.thumbnail.value;
        const price = e.target.price.value;
        const rating = Number(e.target.rating.value);
        const featured = e.target.featured.checked;

        const book = {
            name,
            author,
            thumbnail,
            price,
            rating,
            featured
        }
        dispatch(addBooks(book));
        e.target.reset();
    }

    return (
        <div>
            <div>
                <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
                    <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
                    <form
                        onSubmit={onSubmit}
                        className="book-form">
                        <div className="space-y-2">
                            <label htmlFor="name">Book Name</label>
                            <input required className="text-input" type="text" id="input-Bookname" name="name" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="category">Author</label>
                            <input required className="text-input" type="text" id="input-Bookauthor" name="author" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="image">Image Url</label>
                            <input required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" />
                        </div>

                        <div className="grid grid-cols-2 gap-8 pb-4">
                            <div className="space-y-2">
                                <label htmlFor="price">Price</label>
                                <input required className="text-input" type="number" id="input-Bookprice" name="price" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="quantity">Rating</label>
                                <input required className="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4" />
                            <label htmlFor="featured" className="ml-2 text-sm"> This is a featured book </label>
                        </div>

                        <button type="submit" className="submit" id="submit">Add Book</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBookForm;