import React, { useState, useEffect } from "react";
import { useAddBookMutation, useUpdateBookMutation } from "../features/bookApi";
import { useDispatch, useSelector } from "react-redux";
import { clearEditBook } from "../features/editBookSlice";
const AddBooks = () => {
  const dispatch = useDispatch();
  const editBook = useSelector((state) => state.editBook);

  const [addBook] = useAddBookMutation();
  const [updateBook] = useUpdateBookMutation();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    rating: "",
    review: "",
  });
  useEffect(() => {
    if (editBook) {
      setFormData({
        title: editBook.title,
        author: editBook.author,
        rating: editBook.rating,
        review: editBook.review,
      });
    }
  }, [editBook]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const bookData = {
      ...formData,
      rating: parseFloat(formData.rating),
    };

    if (editBook) {
      updateBook({ id: editBook.id, ...bookData });
      dispatch(clearEditBook());
    } else {
      addBook(bookData);
    }

    setFormData({ title: "", author: "", rating: "", review: "" });
  };
  return (
    <div>
      <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          {editBook ? " Edit Book" : "Add New Book"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              className="block text-gray-700 font-semibold mb-1"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-semibold mb-1"
              htmlFor="author"
            >
              Author
            </label>
            <input
              type="text"
              name="author"
              required
              value={formData.author}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-semibold mb-1"
              htmlFor="rating"
            >
              Rating
            </label>
            <input
              type="number"
              name="rating"
              required
              value={formData.rating}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-semibold mb-1"
              htmlFor="review"
            >
              Review
            </label>
            <input
              type="text"
              name="review"
              required
              value={formData.review}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>
          <button
            title="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition duration-300 cursor-pointer"
          >
            {" "}
            {editBook ? "Update Book" : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
