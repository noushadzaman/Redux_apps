import { useState } from "react";
import AddBookForm from "./components/AddBookForm";
import BookList from "./components/BookList.jsx";
import Navbar from "./components/Navbar";

function App() {
  const [editingBook, setEditingBook] = useState(null);

  return (
    <>
      <Navbar />
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <BookList setEditingBook={setEditingBook} />
          <AddBookForm editingBook={editingBook} />
        </div>
      </main>
    </>
  );
}

export default App;
