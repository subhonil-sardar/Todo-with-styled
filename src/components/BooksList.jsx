import React from "react";
import { useDeleteBookMutation, useGetBooksQuery } from "../features/bookApi";
import { useDispatch } from "react-redux";
import { setEditBook } from "../features/editBookSlice";
const BooksList = () => {
  const { data: books, isLoading } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation();
  const dispatch = useDispatch();
  if (isLoading) return <p>Loading Books...</p>;
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold text-center text-white shadow p-2 rounded">
          Books List
        </h2>
      </div>
      <div>
        <ul className="overflow-auto h-screen p-3">
          {books.map((book) => (
            <li key={book.id}>
              <div className="bg-white p-4 mt-4 w-full rounded-md shadow-2xl">
                <strong className="text-xl">{book.title}</strong>
                <p className="text-xl font-semibold mb-2">{book.author}</p>
                <p className="mb-2">{book.review}</p>
                <p className="text-yellow-500 font-bold">{book.rating}</p>
                <div className="gap-3 flex mt-2">
                  <div>
                    <button
                      onClick={() => {
                        deleteBook(book.id);
                      }}
                      className="px-2 text-white rounded-md bg-red-600 transition duration-500 hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => dispatch(setEditBook(book))}
                      className="px-2 text-white rounded-md bg-indigo-600 transition duration-500 hover:bg-indigo-900"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BooksList;
