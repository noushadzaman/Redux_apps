import { useDispatch } from "react-redux";
import { addBooks } from "../redux/books/thunk/addBook";
import { updateBook } from "../redux/books/thunk/updateBook";
import { useEffect, useState } from "react";

const AddBookForm = ({ editingBook }) => {
    const [formData, setFormData] = useState({
        name: '',
        author: '',
        thumbnail: '',
        price: '',
        rating: '',
        featured: false,
    });

    useEffect(() => {
        if (editingBook) {
            setFormData({
                name: editingBook.name || '',
                author: editingBook.author || '',
                thumbnail: editingBook.thumbnail || '',
                price: editingBook.price || '',
                rating: editingBook.rating || '',
                featured: editingBook.featured || false,
            });
        }
    }, [editingBook]);
    const dispatch = useDispatch();

    function inputUpdate(e) {
        const { name, value } = e.target;
        const rating = Number(value);
        setFormData((prevState) => ({
            ...prevState,
            [name]: name === 'rating' ? rating : value,
        }));
    }

    function onSubmit(e) {
        e.preventDefault();
        if (editingBook === null) {
            dispatch(addBooks(formData));
        }
        else {
            dispatch(updateBook(editingBook.id, formData));
        }
        setFormData({
            name: '',
            author: '',
            thumbnail: '',
            price: '',
            rating: '',
            featured: false,
        })
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
                            <input
                                value={formData?.name}
                                onChange={inputUpdate}
                                required className="text-input" type="text" id="input-Bookname" name="name"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="category">Author</label>
                            <input
                                value={formData?.author}
                                onChange={inputUpdate}
                                required className="text-input" type="text" id="input-Bookauthor" name="author" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="image">Image Url</label>
                            <input
                                value={formData?.thumbnail}
                                onChange={inputUpdate}
                                required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" />
                        </div>

                        <div className="grid grid-cols-2 gap-8 pb-4">
                            <div className="space-y-2">
                                <label htmlFor="price">Price</label>
                                <input
                                    value={formData?.price}
                                    onChange={inputUpdate}
                                    required className="text-input" type="number" id="input-Bookprice" name="price" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="quantity">Rating</label>
                                <input
                                    value={formData?.rating}
                                    onChange={inputUpdate}
                                    required className="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input
                                checked={formData?.featured}
                                onChange={() =>
                                    setFormData((prevFormData) => ({
                                        ...prevFormData,
                                        featured: !prevFormData.featured,
                                    }))
                                }
                                id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4" />
                            <label htmlFor="featured" className="ml-2 text-sm"> This is a featured book </label>
                        </div>

                        <button type="submit" className="submit" id="submit">
                            {editingBook === null ? 'Add Book' : 'Update Book'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBookForm;