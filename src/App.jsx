import React from "react";
import BooksList from "./components/BooksList";
import AddBooks from "./components/AddBooks";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
        <div className="flex justify-center">
          <AddBooks />
        </div>
        <div className="flex justify-center">
          <BooksList />
        </div>
      </div>
    </div>
  );
};

export default App;
